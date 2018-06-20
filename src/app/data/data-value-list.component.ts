import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { DataValueArrayWithLinks } from '../trade-client/model/DataValueArrayWithLinks';
import { DataValueWithLinks } from '../trade-client/model/DataValueWithLinks';
import { DataValueApi } from '../trade-client/api/DataValueApi';

@Component({
  selector: 'data/dataValues',
  templateUrl: './data-value-list.component.html',
})
export class DataValueListComponent implements OnInit {

  private selectedId: string;

  dataValuesArray: DataValueArrayWithLinks;

  constructor(
      private dataValueApi: DataValueApi,
      private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataValuesArray = this.route.paramMap
          .switchMap((params: ParamMap) => {
            this.selectedId = params.get('id');
            return this.dataValueApi.getDataValuesDirectly();
          }).subscribe(result => this
                .dataValuesArray = result, error => console.error('An error occurred', error));
  }

  trackByDataValues(index: number, dataValue: DataValueWithLinks): string { return dataValue.dataValue.id; }
}
