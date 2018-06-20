import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ApiModule } from '../trade-client/api.module';

import { ModelsOverviewComponent } from './models-overview.component';

import { ModelRoutingModule } from './models-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModelRoutingModule
  ],
  declarations: [
    ModelsOverviewComponent
  ]
})
export class ModelsModule {}
