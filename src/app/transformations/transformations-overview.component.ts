import { Component, OnInit } from '@angular/core';

import { NotifierServiceArray } from '../trade-client/model/notifierServiceArray';
import { NotifierServiceService } from '../trade-client/api/notifierService.service';

@Component({
  selector: 'transformations',
  templateUrl: './transformations-overview.component.html',
})
export class TransformationsOverviewComponent implements OnInit {

  notifierServiceArray: NotifierServiceArray;

  constructor(private notifierService: NotifierServiceService) { }

  ngOnInit(): void {
    this.notifierService.getNotifierServices().subscribe(result => this
    .notifierServiceArray = result.notifierServices, error => console.error('An error occurred', error));
  }

}
