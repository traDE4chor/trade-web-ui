import { Component, OnInit } from '@angular/core';

import { NotifierServiceArrayWithLinks } from '../trade-client/model/notifierServiceArrayWithLinks';
import { NotifierServiceArray } from '../trade-client/model/notifierServiceArray';
import { NotifierServiceService } from '../trade-client/api/notifierService.service';

@Component({
  selector: 'models',
  templateUrl: './models-overview.component.html',
})
export class ModelsOverviewComponent implements OnInit {

  notifierServiceArray: NotifierServiceArrayWithLinks;

  constructor(private notifierService: NotifierServiceService) { }

  ngOnInit(): void {
    this.notifierService.getNotifierServices().subscribe(result => this
    .notifierServiceArray = result, error => console.error('An error occurred', error));
  }

}
