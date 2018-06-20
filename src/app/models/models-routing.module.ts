import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModelsOverviewComponent } from './models-overview.component';

const modelRoutes: Routes = [
  { path: 'models',  component: ModelsOverviewComponent }
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
