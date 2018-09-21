import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataElementService, DataElementWithLinks, LinkArray} from "../../trade-client";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {getDataObjectId} from "../model-utils";

@Component({
  selector: 'data-element-details',
  templateUrl: './data-element-details.component.html'
})
export class DataElementDetailsComponent implements OnInit {

  dataElement$: Observable<DataElementWithLinks>;

  dataElementId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataElementApi: DataElementService) {
    this.dataElement$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.dataElementId = params.get('id');

        return this.dataElementApi.getDataElementDirectly(this.dataElementId);
      }));
  }

  ngOnInit() {
  }

  resolveDataObjectId(dataElementLinks: LinkArray) {
    return getDataObjectId(dataElementLinks);
  }
}
