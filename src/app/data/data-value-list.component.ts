import {Component, Inject, OnInit, Optional} from '@angular/core';

import {DataValueArray} from '../trade-client/model/dataValueArray';
import {DataValueWithLinks} from '../trade-client/model/dataValueWithLinks';
import {DataValueService} from '../trade-client/api/dataValue.service';

import {Page, queryPaginated} from '../pagination/pagination-page';
import {Observable, Subject} from "rxjs";
import {BASE_PATH, DataValueArrayWithLinks} from "../trade-client";
import {HttpClient} from "@angular/common/http";
import {startWith, switchMap} from "rxjs/operators";

@Component({
  selector: 'data-values',
  templateUrl: './data-value-list.component.html',
})
export class DataValueListComponent implements OnInit {

  startIndex: number = 1;
  size: number = 10;
  page: Observable<Page<DataValueArray>>;
  pageUrl = new Subject<string>();

  constructor(
    private dataValueApi: DataValueService, private http: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string) {
    this.page = this.pageUrl.pipe(startWith(basePath + '/dataValues' + '?start=' + this.startIndex + '&size=' + this.size), switchMap(url => this.listDataValues(url)));
  }

  ngOnInit(): void {
  }

  trackByDataValues(index: number, dataValue: DataValueWithLinks): string {
    return dataValue.dataValue.id;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listDataValues(url: string) {
    return queryPaginated<DataValueArrayWithLinks, DataValueArray>(this.http, url, 'dataValues');
  }
}
