import {Component, Inject, Input, OnInit, Optional} from '@angular/core';

import {DataValueArray} from '../trade-client/model/dataValueArray';
import {DataValueWithLinks} from '../trade-client/model/dataValueWithLinks';
import {DataValueService} from '../trade-client/api/dataValue.service';

import {Page, queryPaginated} from '../pagination/pagination-page';
import {merge, Observable, Subject} from "rxjs";
import {DataElementInstanceWithLinks, DataValueArrayWithLinks, TRADE_BASE_PATH} from "../trade-client";
import {HttpClient} from "@angular/common/http";
import {debounceTime, share, startWith, switchMap} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'data-values',
  templateUrl: './data-value-list.component.html',
})
export class DataValueListComponent implements OnInit {

  @Input() dataElementInstanceMode: boolean = false;
  @Input() dataElementInstance: DataElementInstanceWithLinks;

  startIndex: number = 1;
  size: number = 10;

  filterForm: FormGroup;
  page: Observable<Page<DataValueArray>>;
  pageUrl = new Subject<string>();

  basePath: string;
  basicUrl: string;

  constructor(
    private dataValueApi: DataValueService, private http: HttpClient, @Optional() @Inject(TRADE_BASE_PATH) basePath: string) {
    this.basePath = basePath;
    this.basicUrl = basePath + '/dataValues' + '?start=' + this.startIndex + '&size=' + this.size;
    this.filterForm = new FormGroup({
      queryParameter: new FormControl(),
      search: new FormControl()
    });
  }

  ngOnInit(): void {
    if (this.dataElementInstanceMode) {
      this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listDataValues(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basePath + '/dataElementInstances/' + this.dataElementInstance.instance.id + '/dataValues' + '?start=' + this.startIndex + '&size=' + this.size), switchMap(url => this.listDataValues(url))));
    } else {
      this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listDataValues(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basicUrl), switchMap(url => this.listDataValues(url))));
    }
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
