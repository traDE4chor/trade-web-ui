import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {InstancesOverviewComponent} from './instances-overview.component';

import {InstanceRoutingModule} from './instances-routing.module';
import {PaginationModule} from "../pagination/pagination.module";
import {DataObjectInstanceListComponent} from "./dataObject/data-object-instance-list.component";
import {DataObjectInstanceDetailsComponent} from "./dataObject/data-object-instance-details.component";
import {DataElementInstanceListComponent} from "./dataElement/data-element-instance-list.component";
import {DataElementInstanceDetailsComponent} from "./dataElement/data-element-instance-details.component";
import {CustomPipesModule} from "../pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InstanceRoutingModule,
    PaginationModule,
    CustomPipesModule
  ],
  declarations: [
    InstancesOverviewComponent,
    DataObjectInstanceListComponent,
    DataObjectInstanceDetailsComponent,
    DataElementInstanceListComponent,
    DataElementInstanceDetailsComponent
  ]
})
export class InstancesModule {}
