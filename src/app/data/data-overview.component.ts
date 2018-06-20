import { Component, OnInit } from '@angular/core';

import { DataValueArrayWithLinks } from '../trade-client/model/DataValueArrayWithLinks';
import { DataValueWithLinks } from '../trade-client/model/DataValueWithLinks';
import { DataValueApi } from '../trade-client/api/DataValueApi';

@Component({
  selector: 'data',
  templateUrl: './data-overview.component.html',
})
export class DataOverviewComponent implements OnInit {

  dataValueArray: DataValueArrayWithLinks;

  constructor(private dataValueApi: DataValueApi) { }

  ngOnInit(): void {
    this.dataValueArray = this.dataValueApi.getDataValuesDirectly(1,10).subscribe(result => this
    .dataValueArray = result, error => console.error('An error occurred', error));
  }
}
