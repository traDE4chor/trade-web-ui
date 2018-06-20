
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataValueArrayWithLinks } from '../trade-client/model/dataValueArrayWithLinks';
import { DataValueWithLinks } from '../trade-client/model/dataValueWithLinks';
import { DataValueService } from '../trade-client/api/dataValue.service';

@Component({
  selector: 'data/dataValue/:id',
  templateUrl: './data-value-details.component.html',
})
export class DataValueDetailsComponent implements OnInit {

  dataValue$: Observable<DataValueWithLinks>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataValueApi: DataValueService
  ) {}

  ngOnInit(): void {
    this.dataValue$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.dataValueApi.getDataValueDirectly(params.get('id'))));
  }

  gotoDataValues(dataValue: DataValueWithLinks) {
      let dataValueId = dataValue ? dataValue.dataValue.id : null;
      // Pass along the data value id if available
      // so that the DataValueList component can select that data value.
      this.router.navigate(['/data/dataValues', { id: dataValueId }]);
  }
}
