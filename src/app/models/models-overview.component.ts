import { Component, OnInit } from '@angular/core';

import { NotifierServiceArrayWithLinks } from '../trade-client/model/NotifierServiceArrayWithLinks';
import { NotifierServiceArray } from '../trade-client/model/NotifierServiceArray';
import { NotifierServiceApi } from '../trade-client/api/NotifierServiceApi';

@Component({
  selector: 'models',
  templateUrl: './models-overview.component.html',
})
export class ModelsOverviewComponent implements OnInit {

  notifierServiceArray: NotifierServiceArrayWithLinks;

  constructor(private notifierService: NotifierServiceApi) { }

  ngOnInit(): void {
    this.notifierServiceArray = this.notifierService.getNotifierServices().subscribe(result => this
    .notifierServiceArray = result, error => console.error('An error occurred', error));
  }

}