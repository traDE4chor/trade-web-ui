import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataOverviewComponent } from './data-overview.component';
import { DataValueListComponent } from './data-value-list.component';
import { DataValueDetailsComponent } from './data-value-details.component';

const dataRoutes: Routes = [
  { path: 'data',  component: DataOverviewComponent },
  { path: 'data/dataValues',  component: DataValueListComponent },
  { path: 'data/dataValues/:id', component: DataValueDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(dataRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DataRoutingModule { }
