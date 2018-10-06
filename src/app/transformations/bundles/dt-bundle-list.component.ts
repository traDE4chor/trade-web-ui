import {Component, Inject, OnInit, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {merge, Observable, Subject} from 'rxjs';

import {Page, queryPaginated} from '../../pagination/pagination-page';
import {debounceTime, share, startWith, switchMap} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";
import {Application, HDT_BASE_PATH} from "../../hdtapps-client";

@Component({
  selector: 'transformation-bundle-list',
  templateUrl: './dt-bundle-list.component.html'
})
export class DtBundleListComponent implements OnInit {

  startIndex: number = 1;
  size: number = 10;

  filterForm: FormGroup;
  page: Observable<Page<Application[]>>;
  pageUrl = new Subject<string>();

  basicUrl: string;

  constructor(private http: HttpClient, @Optional() @Inject(HDT_BASE_PATH) basePath: string) {
    this.basicUrl = basePath + '/apps' + '?start=' + this.startIndex + '&size=' + this.size;
    this.filterForm = new FormGroup({
      queryParameter: new FormControl(),
      search: new FormControl()
    });
    this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listApps(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basicUrl), switchMap(url => this.listApps(url))));
  }

  ngOnInit(): void {
  }

  trackByApp(index: number, app: Application): string {
    return app.appInfo.appID;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listApps(urlOrFilter: string | object) {
    if (typeof urlOrFilter === 'object') {
      let query = new Object();

      if (urlOrFilter['queryParameter'] === null) {
        query['name'] = urlOrFilter['search'];
      } else {
        query[urlOrFilter['queryParameter']] = urlOrFilter['search'];
      }

      urlOrFilter = query;
    }

    return queryPaginated<Application[], Application[]>(this.http, this.basicUrl, null, urlOrFilter);
  }
}
