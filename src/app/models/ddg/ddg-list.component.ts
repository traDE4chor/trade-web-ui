import {Component, Inject, OnInit, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import {DataDependencyGraphArray} from '../../trade-client/model/dataDependencyGraphArray';
import {DataDependencyGraphWithLinks} from '../../trade-client/model/dataDependencyGraphWithLinks';
import {DataDependencyGraphService} from '../../trade-client/api/dataDependencyGraph.service';

import {Page, queryPaginated} from '../../pagination/pagination-page';
import {BASE_PATH, DataDependencyGraphArrayWithLinks} from "../../trade-client";
import {debounceTime, share, startWith, switchMap} from "rxjs/operators";

@Component({
  selector: 'ddg-list',
  templateUrl: './ddg-list.component.html'
})
export class DdgListComponent implements OnInit {

  startIndex: number = 1;
  size: number = 10;
  page: Observable<Page<DataDependencyGraphArray>>;
  pageUrl = new Subject<string>();

  constructor(private ddgApi: DataDependencyGraphService, private http: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string) {
    this.page = this.pageUrl.pipe(startWith(basePath + '/dataDependencyGraphs' + '?start=' + this.startIndex + '&size=' + this.size), switchMap(url => this.listDDGs(url)));
  }

  ngOnInit(): void {
  }

  trackByDDG(index: number, ddg: DataDependencyGraphWithLinks): string {
    return ddg.dataDependencyGraph.id;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listDDGs(url: string) {
    return queryPaginated<DataDependencyGraphArrayWithLinks, DataDependencyGraphArray>(this.http, url, 'dataDependencyGraphs');
  }
}
