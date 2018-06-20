import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ApiModule } from '../trade-client/api.module';

import { NotificationsOverviewComponent } from './notifications-overview.component';

import { NotificationsRoutingModule } from './notifications-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotificationsRoutingModule
  ],
  declarations: [
    NotificationsOverviewComponent
  ]
})
export class NotificationsModule {}
