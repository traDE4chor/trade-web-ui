import {Component, Inject, OnInit, Optional} from '@angular/core';
import {merge, Observable, Subject} from "rxjs";
import {Page, queryPaginated} from "../../pagination/pagination-page";
import {
  TRADE_BASE_PATH,
  DataObjectInstanceArray,
  DataObjectInstanceArrayWithLinks,
  DataObjectInstanceWithLinks
} from "../../trade-client";
import {HttpClient} from "@angular/common/http";
import {debounceTime, share, startWith, switchMap} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'data-object-instance-list',
  templateUrl: './data-object-instance-list.component.html'
})
export class DataObjectInstanceListComponent implements OnInit {

  startIndex: number = 1;
  size: number = 10;

  filterForm: FormGroup;
  page: Observable<Page<DataObjectInstanceArray>>;
  pageUrl = new Subject<string>();

  basicUrl: string;

  constructor(private http: HttpClient, @Optional() @Inject(TRADE_BASE_PATH) basePath: string) {
    this.basicUrl = basePath + '/dataObjectInstances' + '?start=' + this.startIndex + '&size=' + this.size;
    this.filterForm = new FormGroup({
      queryParameter: new FormControl(),
      search: new FormControl()
    });
    this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listDataObjectInstances(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basicUrl), switchMap(url => this.listDataObjectInstances(url))));
  }

  ngOnInit(): void {
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
