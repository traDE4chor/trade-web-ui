import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {merge, Observable, Subject} from "rxjs";
import {Page, queryPaginated} from "../../pagination/pagination-page";
import {
  TRADE_BASE_PATH,
  DataElementArray,
  DataElementArrayWithLinks,
  DataElementService,
  DataElementWithLinks, DataObjectWithLinks, LinkArray
} from "../../trade-client";
import {HttpClient} from "@angular/common/http";
import {debounceTime, share, startWith, switchMap} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'data-element-list',
  templateUrl: './data-element-list.component.html'
})
export class DataElementListComponent implements OnInit {

  @Input() dataObjectMode: boolean = false;
  @Input() dataObject: DataObjectWithLinks;

  startIndex: number = 1;
  size: number = 10;

  filterForm: FormGroup;
  page: Observable<Page<DataElementArray>>;
  pageUrl = new Subject<string>();

  basePath: string;
  basicUrl: string;

  constructor(private dataElementApi: DataElementService, private http: HttpClient, @Optional() @Inject(TRADE_BASE_PATH) basePath: string) {
    this.basePath = basePath;
    this.basicUrl = this.basePath + '/dataElements' + '?start=' + this.startIndex + '&size=' + this.size;

    this.filterForm = new FormGroup({
      queryParameter: new FormControl(),
      search: new FormControl()
    });
  }

  ngOnInit(): void {
    if (this.dataObjectMode) {
      this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listDataElements(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basePath + '/dataObjects/' + this.dataObject.dataObject.id + '/dataElements' + '?start=' + this.startIndex + '&size=' + this.size), switchMap(url => this.listDataElements(url))));
    } else {
      this.page = merge(this.filterForm.valueChanges.pipe(debounceTime(500), switchMap(urlOrFilter => this.listDataElements(urlOrFilter)), share()), this.pageUrl.pipe(startWith(this.basicUrl), switchMap(url => this.listDataElements(url))));
    }
  }

  trackByDataElement(index: number, dataElement: DataElementWithLinks): string {
    return dataElement.dataElement.id;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listDataElements(urlOrFilter: string | object) {
    if (typeof urlOrFilter === 'object') {
      let query = new Object();

      if (urlOrFilter['queryParameter'] === null) {
        query['name'] = urlOrFilter['search'];
      } else {
        query[urlOrFilter['queryParameter']] = urlOrFilter['search'];
      }

      urlOrFilter = query;
    }

    return queryPaginated<DataElementArrayWithLinks, DataElementArray>(this.http, this.basicUrl, 'dataElements', urlOrFilter);
  }

}
