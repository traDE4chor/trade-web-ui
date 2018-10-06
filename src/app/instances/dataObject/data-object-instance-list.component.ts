import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {merge, Observable, Subject} from "rxjs";
import {Page, queryPaginated} from "../../pagination/pagination-page";
import {
  TRADE_BASE_PATH,
  DataObjectInstanceArray,
  DataObjectInstanceArrayWithLinks,
  DataObjectInstanceWithLinks, DataObjectWithLinks
} from "../../trade-client";
import {HttpClient} from "@angular/common/http";
import {debounceTime, share, startWith, switchMap} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'data-object-instance-list',
  templateUrl: './data-object-instance-list.component.html'
})
export class DataObjectInstanceListComponent implements OnInit {

  @Input() dataObjectMode: boolean = false;
  @Input() dataObject: DataObjectWithLinks;

  startIndex: number = 1;
  size: number = 10;

  filterForm: FormGroup;
  page: Observable<Page<DataObjectInstanceArray>>;
  pageUrl = new Subject<string>();

  basePath: string;
  basicUrl: string;

  constructor(private http: HttpClient, @Optional() @Inject(TRADE_BASE_PATH) basePath: string) {
    this.basePath = basePath;
    this.basicUrl = basePath + '/dataObjectInstances' + '?start=' + this.startIndex + '&size=' + this.size;
    this.filterForm = new FormGroup({
      queryParameter: new FormControl(),
      search: new FormControl()
    });
  }

  ngOnInit(): void {
    if (this.dataObjectMode) {
      this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listDataObjectInstances(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basePath + '/dataObjects/' + this.dataObject.dataObject.id + '/instances' + '?start=' + this.startIndex + '&size=' + this.size), switchMap(url => this.listDataObjectInstances(url))));
    } else {
      this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listDataObjectInstances(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basicUrl), switchMap(url => this.listDataObjectInstances(url))));
    }
  }

  trackByDataObjectInstance(index: number, dataObject: DataObjectInstanceWithLinks): string {
    return dataObject.instance.id;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listDataObjectInstances(urlOrFilter: string | object) {
    if (typeof urlOrFilter === 'object') {
      let query = new Object();

      if (urlOrFilter['queryParameter'] === null) {
        query['status'] = urlOrFilter['search'];
      } else {
        query[urlOrFilter['queryParameter']] = urlOrFilter['search'];
      }

      urlOrFilter = query;
    }

    return queryPaginated<DataObjectInstanceArrayWithLinks, DataObjectInstanceArray>(this.http, this.basicUrl, 'instances', urlOrFilter);
  }

}
