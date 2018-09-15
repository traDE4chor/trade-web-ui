import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ApiModule } from '../trade-client/api.module';

import { TransformationsOverviewComponent } from './transformations-overview.component';

import { TransformationsRoutingModule } from './transformations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TransformationsRoutingModule
  ],
  declarations: [
    TransformationsOverviewComponent
  ]
})
export class TransformationsModule {}
