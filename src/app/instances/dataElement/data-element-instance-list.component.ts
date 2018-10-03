import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {merge, Observable, Subject} from "rxjs";
import {Page, queryPaginated} from "../../pagination/pagination-page";
import {
  TRADE_BASE_PATH,
  DataElementInstanceArray,
  DataElementInstanceArrayWithLinks,
  DataElementInstanceWithLinks,
  DataObjectInstanceWithLinks
} from "../../trade-client";
import {HttpClient} from "@angular/common/http";
import {debounceTime, share, startWith, switchMap} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'data-element-instance-list',
  templateUrl: './data-element-instance-list.component.html'
})
export class DataElementInstanceListComponent implements OnInit {

  @Input() dataObjectMode: boolean = false;
  @Input() dataObjectInstance: DataObjectInstanceWithLinks;

  startIndex: number = 1;
  size: number = 10;

  filterForm: FormGroup;
  page: Observable<Page<DataElementInstanceArray>>;
  pageUrl = new Subject<string>();

  basePath: string;
  basicUrl: string;

  constructor(private http: HttpClient, @Optional() @Inject(TRADE_BASE_PATH) basePath: string) {
    this.basePath = basePath;
    this.basicUrl = this.basePath + '/dataElementInstances' + '?start=' + this.startIndex + '&size=' + this.size;

    this.filterForm = new FormGroup({
      queryParameter: new FormControl(),
      search: new FormControl()
    });
  }

  ngOnInit(): void {
    if (this.dataObjectMode) {
      this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listDataElementInstances(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basePath + '/dataObjectInstances/' + this.dataObjectInstance.instance.id + '/elementInstances' + '?start=' + this.startIndex + '&size=' + this.size), switchMap(url => this.listDataElementInstances(url))));
    } else {
      this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listDataElementInstances(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basicUrl), switchMap(url => this.listDataElementInstances(url))));
    }
  }

  trackByDataElementInstance(index: number, dataElement: DataElementInstanceWithLinks): string {
    return dataElement.instance.id;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listDataElementInstances(urlOrFilter: string | object) {
    if (typeof urlOrFilter === 'object') {
      let query = new Object();

      if (urlOrFilter['queryParameter'] === null) {
        query['status'] = urlOrFilter['search'];
      } else {
        query[urlOrFilter['queryParameter']] = urlOrFilter['search'];
      }

      urlOrFilter = query;
    }

    return queryPaginated<DataElementInstanceArrayWithLinks, DataElementInstanceArray>(this.http, this.basicUrl, 'instances', urlOrFilter);
  }

}
