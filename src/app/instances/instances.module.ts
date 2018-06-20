import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ApiModule } from '../trade-client/api.module';

import { InstancesOverviewComponent } from './instances-overview.component';

import { InstanceRoutingModule } from './instances-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InstanceRoutingModule
  ],
  declarations: [
    InstancesOverviewComponent
  ]
})
export class InstancesModule {}
