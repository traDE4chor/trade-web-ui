import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TransformationsOverviewComponent} from './transformations-overview.component';

import {TransformationsRoutingModule} from './transformations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TransformationsRoutingModule
  ],
  declarations: [
    TransformationsOverviewComponent
  ]
})
export class TransformationsModule {}
