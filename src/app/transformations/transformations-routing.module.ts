import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransformationsOverviewComponent } from './transformations-overview.component';

const transformationRoutes: Routes = [
  { path: 'transformations',  component: TransformationsOverviewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(transformationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransformationsRoutingModule { }
