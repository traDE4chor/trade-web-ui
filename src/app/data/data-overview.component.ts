import { Component, OnInit } from '@angular/core';

import { DataValueArrayWithLinks } from '../trade-client/model/dataValueArrayWithLinks';
import { DataValueWithLinks } from '../trade-client/model/dataValueWithLinks';
import { DataValueService } from '../trade-client/api/dataValue.service';

@Component({
  selector: 'data',
  templateUrl: './data-overview.component.html',
})
export class DataOverviewComponent implements OnInit {

  dataValueArray: DataValueArrayWithLinks;

  constructor(private dataValueApi: DataValueService) { }

  ngOnInit(): void {
    this.dataValueApi.getDataValuesDirectly(1,10).subscribe(result => this
    .dataValueArray = result, error => console.error('An error occurred', error));
  }
}
