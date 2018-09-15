import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataValueData } from '../trade-client/model/dataValueData';
import { DataValue } from '../trade-client/model/dataValue'
import { DataValueService } from '../trade-client/api/dataValue.service';

@Component({
  selector: 'data-value-form',
  templateUrl: './data-value-form.component.html',
  styleUrls: ['./data-value-form.component.scss']
})
export class DataValueFormComponent implements OnInit {

  dataValue: DataValueData;

  resultDataValue: DataValue;

  constructor(
    private router: Router,
    private dataValueApi: DataValueService
  ) {}

  ngOnInit(): void {
    this.newDataValue();
  }

  newDataValue() {
    this.dataValue = {
      name: '',
      createdBy: '',
      type: '',
      contentType: ''
    }
  }

  submitDataValue() {
    this.dataValueApi.addDataValue(this.dataValue).subscribe(result => this.resultDataValue = result,
    error => console.error('An error occurred', error));

    this.router.navigate(['/data/dataValues']);
  }
}
