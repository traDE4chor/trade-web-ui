import {Component, OnInit} from '@angular/core';
import {DataObjectInstanceService, DataObjectInstanceWithLinks} from "../../trade-client";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'data-object-instance-details',
  templateUrl: './data-object-instance-details.component.html'
})
export class DataObjectInstanceDetailsComponent implements OnInit {

  dataObjectInstance$: Observable<DataObjectInstanceWithLinks>;

  dataObjectInstanceId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataObjectInstanceApi: DataObjectInstanceService) {
    this.dataObjectInstance$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.dataObjectInstanceId = params.get('id');

        return this.dataObjectInstanceApi.getDataObjectInstance(this.dataObjectInstanceId);
      }));
  }

  ngOnInit() {
  }

}
