
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { DataValueArrayWithLinks } from '../trade-client/model/dataValueArrayWithLinks';
import { DataValueWithLinks } from '../trade-client/model/dataValueWithLinks';
import { DataValueService } from '../trade-client/api/dataValue.service';

@Component({
  selector: 'data/dataValues',
  templateUrl: './data-value-list.component.html',
})
export class DataValueListComponent implements OnInit {

  private selectedId: string;

  dataValuesArray: DataValueArrayWithLinks;

  constructor(
      private dataValueApi: DataValueService,
      private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
          switchMap((params: ParamMap) => {
            this.selectedId = params.get('id');
            return this.dataValueApi.getDataValuesDirectly();
          })).subscribe(result => this
                .dataValuesArray = result, error => console.error('An error occurred', error));
  }

  trackByDataValues(index: number, dataValue: DataValueWithLinks): string { return dataValue.dataValue.id; }
}
