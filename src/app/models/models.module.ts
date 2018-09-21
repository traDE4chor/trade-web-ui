import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';

import {ModelsOverviewComponent} from './models-overview.component';

import {ModelRoutingModule} from './models-routing.module';
import {DdgListComponent} from './ddg/ddg-list.component';
import {DdgDetailsComponent} from './ddg/ddg-details.component';
import {DdgFormComponent} from './ddg/ddg-form.component';

import {PaginationModule} from "../pagination/pagination.module";
import {DataObjectListComponent} from './dataObject/data-object-list.component';
import {DataObjectDetailsComponent} from './dataObject/data-object-details.component';
import {DataElementListComponent} from "./dataElement/data-element-list.component";
import {DataElementDetailsComponent} from "./dataElement/data-element-details.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModelRoutingModule,
    FileUploadModule,
    PaginationModule
  ],
  declarations: [
    ModelsOverviewComponent,
    DdgListComponent,
    DdgDetailsComponent,
    DdgFormComponent,
    DataObjectListComponent,
    DataObjectDetailsComponent,
    DataElementListComponent,
    DataElementDetailsComponent
  ]
})
export class ModelsModule {
}
