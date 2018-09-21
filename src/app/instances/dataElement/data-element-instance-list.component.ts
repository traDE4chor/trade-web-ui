import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Page, queryPaginated} from "../../pagination/pagination-page";
import {
  BASE_PATH,
  DataElementInstanceArray,
  DataElementInstanceArrayWithLinks,
  DataElementWithLinks,
  DataObjectInstanceWithLinks
} from "../../trade-client";
import {HttpClient} from "@angular/common/http";
import {startWith, switchMap} from "rxjs/operators";


@Component({
  selector: 'data-element-instance-list',
  templateUrl: './data-element-instance-list.component.html'
})
export class DataElementInstanceListComponent implements OnInit {

  @Input() dataObjectMode: boolean = false;
  @Input() dataObjectInstance: DataObjectInstanceWithLinks;

  startIndex: number = 1;
  size: number = 10;
  page: Observable<Page<DataElementInstanceArray>>;
  pageUrl = new Subject<string>();

  basePath: string;

  constructor(private http: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string) {
    this.basePath = basePath;
  }

  ngOnInit(): void {
    if (this.dataObjectMode) {
      this.page = this.pageUrl.pipe(startWith(this.basePath + '/dataObjectInstances/' + this.dataObjectInstance.instance.id + '/elementInstances' + '?start=' + this.startIndex + '&size=' + this.size), switchMap(url => this.listDataElementInstances(url)));
    } else {
      this.page = this.pageUrl.pipe(startWith(this.basePath + '/dataElementInstances' + '?start=' + this.startIndex + '&size=' + this.size), switchMap(url => this.listDataElementInstances(url)));
    }
  }

  trackByDataElementInstance(index: number, dataElement: DataElementWithLinks): string {
    return dataElement.instance.id;
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  private listDataElementInstances(url: string) {
    return queryPaginated<DataElementInstanceArrayWithLinks, DataElementInstanceArray>(this.http, url, 'instances');
  }

}
