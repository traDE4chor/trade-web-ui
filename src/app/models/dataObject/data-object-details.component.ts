import {Component, OnInit} from '@angular/core';
import {DataObjectService, DataObjectWithLinks} from "../../trade-client";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'data-object-details',
  templateUrl: './data-object-details.component.html'
})
export class DataObjectDetailsComponent implements OnInit {

  dataObject$: Observable<DataObjectWithLinks>;

  dataObjectId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataObjectApi: DataObjectService) {
    this.dataObject$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.dataObjectId = params.get('id');

        return this.dataObjectApi.getDataObjectById(this.dataObjectId);
      }));
  }

  ngOnInit() {
  }

}
