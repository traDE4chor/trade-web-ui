import {Component, Inject, OnInit, Optional} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Page, queryPaginated} from "../../pagination/pagination-page";
import {BASE_PATH, DataObjectArray, DataObjectArrayWithLinks, DataObjectWithLinks, LinkArray} from "../../trade-client";
import {HttpClient} from "@angular/common/http";
import {startWith, switchMap} from "rxjs/operators";

@Component({
  selector: 'data-object-list',
  templateUrl: './data-object-list.component.html'
})
export class DataObjectListComponent implements OnInit {

  startIndex: number = 1;
  size: number = 10;
  page: Observable<Page<DataObjectArray>>;
  pageUrl = new Subject<string>();

  constructor(private http: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string) {
    this.page = this.pageUrl.pipe(startWith(basePath + '/dataObjects' + '?start=' + this.startIndex + '&size=' + this.size), switchMap(url => this.listDataObjects(url)));
  }

  ngOnInit(): void {
  }

  trackByDataObject(index: number, dataObject: DataObjectWithLinks): string {
    return dataObject.dataObject.id;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listDataObjects(url: string) {
    return queryPaginated<DataObjectArrayWithLinks, DataObjectArray>(this.http, url, 'dataObjects');
  }

}
