import {Component, Inject, OnInit, Optional} from '@angular/core';
import {merge, Observable, Subject} from "rxjs";
import {Page, queryPaginated} from "../../pagination/pagination-page";
import {TRADE_BASE_PATH, DataObjectArray, DataObjectArrayWithLinks, DataObjectWithLinks, LinkArray} from "../../trade-client";
import {HttpClient} from "@angular/common/http";
import {debounceTime, share, startWith, switchMap} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'data-object-list',
  templateUrl: './data-object-list.component.html'
})
export class DataObjectListComponent implements OnInit {

  startIndex: number = 1;
  size: number = 10;

  filterForm: FormGroup;
  page: Observable<Page<DataObjectArray>>;
  pageUrl = new Subject<string>();

  basicUrl: string;

  constructor(private http: HttpClient, @Optional() @Inject(TRADE_BASE_PATH) basePath: string) {
    this.basicUrl = basePath + '/dataObjects' + '?start=' + this.startIndex + '&size=' + this.size
    this.filterForm = new FormGroup({
      queryParameter: new FormControl(),
      search: new FormControl()
    });
    this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listDataObjects(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basicUrl), switchMap(url => this.listDataObjects(url))));
  }

  ngOnInit(): void {
  }

  trackByDataObject(index: number, dataObject: DataObjectWithLinks): string {
    return dataObject.dataObject.id;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listDataObjects(urlOrFilter: string | object) {
    if (typeof urlOrFilter === 'object') {
      let query = new Object();

      if (urlOrFilter['queryParameter'] === null) {
        query['name'] = urlOrFilter['search'];
      } else {
        query[urlOrFilter['queryParameter']] = urlOrFilter['search'];
      }

      urlOrFilter = query;
    }

    return queryPaginated<DataObjectArrayWithLinks, DataObjectArray>(this.http, this.basicUrl, 'dataObjects', urlOrFilter);
  }

}
