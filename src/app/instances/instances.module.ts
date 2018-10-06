import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {InstancesOverviewComponent} from './instances-overview.component';

import {InstanceRoutingModule} from './instances-routing.module';
import {PaginationModule} from "../pagination/pagination.module";
import {DataObjectInstanceListComponent} from "./dataObject/data-object-instance-list.component";
import {DataObjectInstanceDetailsComponent} from "./dataObject/data-object-instance-details.component";
import {DataElementInstanceListComponent} from "./dataElement/data-element-instance-list.component";
import {DataElementInstanceDetailsComponent} from "./dataElement/data-element-instance-details.component";
import {CustomPipesModule} from "../pipes/pipes.module";
import {DataModule} from "../data/data.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InstanceRoutingModule,
    PaginationModule,
    CustomPipesModule,
    DataModule
  ],
  declarations: [
    InstancesOverviewComponent,
    DataObjectInstanceListComponent,
    DataObjectInstanceDetailsComponent,
    DataElementInstanceListComponent,
    DataElementInstanceDetailsComponent
  ],
  exports: [
    DataObjectInstanceListComponent,
    DataElementInstanceListComponent
  ]
})
export class InstancesModule {}
