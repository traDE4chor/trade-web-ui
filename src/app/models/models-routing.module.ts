import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ModelsOverviewComponent} from './models-overview.component';
import {DdgDetailsComponent} from "../models/ddg/ddg-details.component";
import {DdgListComponent} from "../models/ddg/ddg-list.component";
import {DdgFormComponent} from "../models/ddg/ddg-form.component";
import {DataObjectListComponent} from "./dataObject/data-object-list.component";
import {DataObjectDetailsComponent} from "./dataObject/data-object-details.component";
import {DataElementListComponent} from "./dataElement/data-element-list.component";
import {DataElementDetailsComponent} from "./dataElement/data-element-details.component";

const modelRoutes: Routes = [
  {path: 'models', component: ModelsOverviewComponent},
  {path: 'models/ddgs', component: DdgListComponent},
  {path: 'models/ddgs/:id', component: DdgDetailsComponent},
  {path: 'models/ddgs?create', component: DdgFormComponent},
  {path: 'models/dataObjects', component: DataObjectListComponent},
  {path: 'models/dataObjects/:id', component: DataObjectDetailsComponent},
  {path: 'models/dataElements', component: DataElementListComponent},
  {path: 'models/dataElements/:id', component: DataElementDetailsComponent}

];

@NgModule({
  imports: [
    RouterModule.forChild(modelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModelRoutingModule {
}
