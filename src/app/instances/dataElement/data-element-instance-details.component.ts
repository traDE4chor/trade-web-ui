import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataElementInstanceService, DataElementInstanceWithLinks} from "../../trade-client";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'data-element-instance-details',
  templateUrl: './data-element-instance-details.component.html'
})
export class DataElementInstanceDetailsComponent implements OnInit {

  dataElementInstance$: Observable<DataElementInstanceWithLinks>;

  dataElementInstanceId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataElementInstanceApi: DataElementInstanceService) {
    this.dataElementInstance$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.dataElementInstanceId = params.get('id');

        return this.dataElementInstanceApi.getDataElementInstance(this.dataElementInstanceId);
      }));
  }

  ngOnInit() {
  }

}
