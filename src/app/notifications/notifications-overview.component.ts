import {Component, OnInit} from '@angular/core';

import {NotifierServiceArray} from '../trade-client/model/notifierServiceArray';
import {NotifierServiceService} from '../trade-client/api/notifierService.service';
import {
  NotificationArray,
  NotificationService,
  NotifierServiceParameterDescription,
  NotifierServiceParameterDescriptionArray
} from "../trade-client";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'notifications',
  templateUrl: './notifications-overview.component.html',
})
export class NotificationsOverviewComponent implements OnInit {

  notificationArray: NotificationArray;

  notifierServiceArray: NotifierServiceArray;

  startIndex: number = 1;
  size: number = 5;

  constructor(private notifierService: NotifierServiceService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.notifierService.getNotifierServices(this.startIndex, this.size).subscribe(result => this
      .notifierServiceArray = result.notifierServices, error => console.error('An error occurred', error));

    this.notificationService.getNotifications(this.startIndex, this.size).subscribe(result => this.notificationArray = result.notifications, error => console.error('An error occurred', error));
  }

  stringifyParameters(array: NotifierServiceParameterDescriptionArray): string {
    let result: string = '';

    for (let param of array) {
      result = result + param.parameterName + ', ';
    }

    result = result.slice(null,result.length - 2);

    return result;
  }
}
