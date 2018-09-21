import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Page, queryPaginated} from "../../pagination/pagination-page";
import {
  BASE_PATH,
  DataElementArray,
  DataElementArrayWithLinks,
  DataElementService,
  DataElementWithLinks, DataObjectWithLinks, LinkArray
} from "../../trade-client";
import {HttpClient} from "@angular/common/http";
import {startWith, switchMap} from "rxjs/operators";
import {getDataObjectId} from "../model-utils";


@Component({
  selector: 'data-element-list',
  templateUrl: './data-element-list.component.html'
})
export class DataElementListComponent implements OnInit {

  @Input() dataObjectMode: boolean = false;
  @Input() dataObject: DataObjectWithLinks;

  startIndex: number = 1;
  size: number = 10;
  page: Observable<Page<DataElementArray>>;
  pageUrl = new Subject<string>();

  basePath: string;

  constructor(private dataElementApi: DataElementService, private http: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string) {
    this.basePath = basePath;
  }

  ngOnInit(): void {
    if (this.dataObjectMode) {
      this.page = this.pageUrl.pipe(startWith(this.basePath + '/dataObjects/' + this.dataObject.dataObject.id + '/dataElements' + '?start=' + this.startIndex + '&size=' + this.size), switchMap(url => this.listDataElements(url)));
    } else {
      this.page = this.pageUrl.pipe(startWith(this.basePath + '/dataElements' + '?start=' + this.startIndex + '&size=' + this.size), switchMap(url => this.listDataElements(url)));
    }
  }

  trackByDataElement(index: number, dataElement: DataElementWithLinks): string {
    return dataElement.dataElement.id;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listDataElements(url: string) {
    return queryPaginated<DataElementArrayWithLinks, DataElementArray>(this.http, url, 'dataElements');
  }

  resolveDataObjectId(dataElementLinks: LinkArray) {
    return getDataObjectId(dataElementLinks);
  }
}
