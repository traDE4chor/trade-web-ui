import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotificationsOverviewComponent } from './notifications-overview.component';
import {DdgListComponent} from "../models/ddg/ddg-list.component";

const notificationRoutes: Routes = [
  { path: 'notifications',  component: NotificationsOverviewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(notificationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NotificationsRoutingModule { }
