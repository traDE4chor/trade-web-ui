import { Component, OnInit } from '@angular/core';

import { DataValueArray } from '../trade-client/model/dataValueArray';
import { DataValueService } from '../trade-client/api/dataValue.service';

@Component({
  selector: 'data',
  templateUrl: './data-overview.component.html',
})
export class DataOverviewComponent implements OnInit {

  dataValueArray: DataValueArray;

  constructor(private dataValueApi: DataValueService) { }

  ngOnInit(): void {
    this.dataValueApi.getDataValuesDirectly(1,20).subscribe(result => this
    .dataValueArray = result.dataValues, error => console.error('An error occurred', error));
  }
}
