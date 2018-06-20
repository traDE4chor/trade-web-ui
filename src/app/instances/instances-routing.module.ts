import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstancesOverviewComponent } from './instances-overview.component';

const instanceRoutes: Routes = [
  { path: 'instances',  component: InstancesOverviewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(instanceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InstanceRoutingModule { }
