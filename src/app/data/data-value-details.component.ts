import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataValueWithLinks } from '../trade-client/model/DataValueWithLinks';
import { DataValue } from '../trade-client/model/DataValue';
import { DataValueApi } from '../trade-client/api/DataValueApi';

@Component({
  selector: 'data/dataValue/:id',
  templateUrl: './data-value-details.component.html',
})
export class DataValueDetailsComponent implements OnInit {

  dataValue$: Observable<DataValueWithLinks>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataValueApi: DataValueApi
  ) {}

  ngOnInit(): void {
    this.dataValue$ = this.route.paramMap
        .switchMap((params: ParamMap) =>
          this.dataValueApi.getDataValueDirectly(params.get('id')));
  }

  gotoDataValues(dataValue: DataValueWithLinks) {
      let dataValueId = dataValue ? dataValue.dataValue.id : null;
      // Pass along the data value id if available
      // so that the DataValueList component can select that data value.
      this.router.navigate(['/data/dataValues', { id: dataValueId }]);
  }
}
