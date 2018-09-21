import {Component, Inject, OnInit, Optional} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Page, queryPaginated} from "../../pagination/pagination-page";
import {
  BASE_PATH,
  DataObjectInstanceArray,
  DataObjectInstanceArrayWithLinks,
  DataObjectInstanceWithLinks
} from "../../trade-client";
import {HttpClient} from "@angular/common/http";
import {startWith, switchMap} from "rxjs/operators";

@Component({
  selector: 'data-object-instance-list',
  templateUrl: './data-object-instance-list.component.html'
})
export class DataObjectInstanceListComponent implements OnInit {

  startIndex: number = 1;
  size: number = 10;
  page: Observable<Page<DataObjectInstanceArray>>;
  pageUrl = new Subject<string>();

  constructor(private http: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string) {
    this.page = this.pageUrl.pipe(startWith(basePath + '/dataObjectInstances' + '?start=' + this.startIndex + '&size=' + this.size), switchMap(url => this.listDataObjectInstances(url)));
  }

  ngOnInit(): void {
  }

  trackByDataObjectInstance(index: number, dataObject: DataObjectInstanceWithLinks): string {
    return dataObject.instance.id;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listDataObjectInstances(url: string) {
    return queryPaginated<DataObjectInstanceArrayWithLinks, DataObjectInstanceArray>(this.http, url, 'instances');
  }

}
