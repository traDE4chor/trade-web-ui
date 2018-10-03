import {Component, Inject, OnInit, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {merge, Observable, Subject} from 'rxjs';

import {DataDependencyGraphArray} from '../../trade-client/model/dataDependencyGraphArray';
import {DataDependencyGraphWithLinks} from '../../trade-client/model/dataDependencyGraphWithLinks';
import {DataDependencyGraphService} from '../../trade-client/api/dataDependencyGraph.service';

import {Page, queryPaginated} from '../../pagination/pagination-page';
import {TRADE_BASE_PATH, DataDependencyGraphArrayWithLinks} from "../../trade-client";
import {debounceTime, share, startWith, switchMap} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'ddg-list',
  templateUrl: './ddg-list.component.html'
})
export class DdgListComponent implements OnInit {

  startIndex: number = 1;
  size: number = 10;

  filterForm: FormGroup;
  page: Observable<Page<DataDependencyGraphArray>>;
  pageUrl = new Subject<string>();

  basicUrl: string;

  constructor(private ddgApi: DataDependencyGraphService, private http: HttpClient, @Optional() @Inject(TRADE_BASE_PATH) basePath: string) {
    this.basicUrl = basePath + '/dataDependencyGraphs' + '?start=' + this.startIndex + '&size=' + this.size;
    this.filterForm = new FormGroup({
      queryParameter: new FormControl(),
      search: new FormControl()
    });
    this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listDDGs(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basicUrl), switchMap(url => this.listDDGs(url))));
  }

  ngOnInit(): void {
  }

  trackByDDG(index: number, ddg: DataDependencyGraphWithLinks): string {
    return ddg.dataDependencyGraph.id;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listDDGs(urlOrFilter: string | object) {
    if (typeof urlOrFilter === 'object') {
      let query = new Object();

      if (urlOrFilter['queryParameter'] === null) {
        query['name'] = urlOrFilter['search'];
      } else {
        query[urlOrFilter['queryParameter']] = urlOrFilter['search'];
      }

      urlOrFilter = query;
    }

    return queryPaginated<DataDependencyGraphArrayWithLinks, DataDependencyGraphArray>(this.http, this.basicUrl, 'dataDependencyGraphs', urlOrFilter);
  }
}
