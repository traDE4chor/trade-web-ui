import {Component, OnInit} from '@angular/core';

import {DataValueArray} from '../trade-client/model/dataValueArray';
import {DataValueWithLinks} from '../trade-client/model/dataValueWithLinks';
import {DataValueService} from '../trade-client/api/dataValue.service';

@Component({
  selector: 'data-values',
  templateUrl: './data-value-list.component.html',
})
export class DataValueListComponent implements OnInit {

  dataValuesArray: DataValueArray;

  constructor(
    private dataValueApi: DataValueService
  ) {
  }

  ngOnInit(): void {
    this.dataValueApi.getDataValuesDirectly().subscribe(result => this
      .dataValuesArray = result.dataValues, error => console.error('An error occurred', error));
  }

  trackByDataValues(index: number, dataValue: DataValueWithLinks): string {
    return dataValue.dataValue.id;
  }
}
