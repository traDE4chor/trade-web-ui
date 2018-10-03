import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NotificationsOverviewComponent} from './notifications-overview.component';

import {NotificationsRoutingModule} from './notifications-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotificationsRoutingModule
  ],
  declarations: [
    NotificationsOverviewComponent
  ]
})
export class NotificationsModule {}
