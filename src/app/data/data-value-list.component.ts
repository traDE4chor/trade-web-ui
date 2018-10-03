import {Component, Inject, OnInit, Optional} from '@angular/core';

import {DataValueArray} from '../trade-client/model/dataValueArray';
import {DataValueWithLinks} from '../trade-client/model/dataValueWithLinks';
import {DataValueService} from '../trade-client/api/dataValue.service';

import {Page, queryPaginated} from '../pagination/pagination-page';
import {merge, Observable, Subject} from "rxjs";
import {TRADE_BASE_PATH, DataValueArrayWithLinks} from "../trade-client";
import {HttpClient} from "@angular/common/http";
import {debounceTime, share, startWith, switchMap} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'data-values',
  templateUrl: './data-value-list.component.html',
})
export class DataValueListComponent implements OnInit {

  startIndex: number = 1;
  size: number = 10;

  filterForm: FormGroup;
  page: Observable<Page<DataValueArray>>;
  pageUrl = new Subject<string>();

  basicUrl: string;

  constructor(
    private dataValueApi: DataValueService, private http: HttpClient, @Optional() @Inject(TRADE_BASE_PATH) basePath: string) {
    this.basicUrl = basePath + '/dataValues' + '?start=' + this.startIndex + '&size=' + this.size;
    this.filterForm = new FormGroup({
      queryParameter: new FormControl(),
      search: new FormControl()
    });
    this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listDataValues(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basicUrl), switchMap(url => this.listDataValues(url))));
  }

  ngOnInit(): void {
  }

  trackByDataValues(index: number, dataValue: DataValueWithLinks): string {
    return dataValue.dataValue.id;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listDataValues(urlOrFilter: string | object) {
    if (typeof urlOrFilter === 'object') {
      let query = new Object();

      if (urlOrFilter['queryParameter'] === null) {
        query['createdBy'] = urlOrFilter['search'];
      } else {
        query[urlOrFilter['queryParameter']] = urlOrFilter['search'];
      }

      urlOrFilter = query;
    }

    return queryPaginated<DataValueArrayWithLinks, DataValueArray>(this.http, this.basicUrl, 'dataValues', urlOrFilter);
  }
}
