import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModelsOverviewComponent } from './models-overview.component';
import {DdgDetailsComponent} from "../models/ddg/ddg-details.component";
import {DdgListComponent} from "../models/ddg/ddg-list.component";
import {DdgFormComponent} from "../models/ddg/ddg-form.component";

const modelRoutes: Routes = [
  { path: 'models',  component: ModelsOverviewComponent },
  { path: 'models/ddgs',  component: DdgListComponent },
  { path: 'models/ddgs/:id', component: DdgDetailsComponent },
  { path: 'models/ddgs?create', component: DdgFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(modelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModelRoutingModule { }
