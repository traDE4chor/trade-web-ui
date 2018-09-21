import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {InstancesOverviewComponent} from './instances-overview.component';
import {DataObjectInstanceListComponent} from "./dataObject/data-object-instance-list.component";
import {DataObjectInstanceDetailsComponent} from "./dataObject/data-object-instance-details.component";
import {DataElementInstanceListComponent} from "./dataElement/data-element-instance-list.component";
import {DataElementInstanceDetailsComponent} from "./dataElement/data-element-instance-details.component";

const instanceRoutes: Routes = [
  {path: 'instances', component: InstancesOverviewComponent},
  {path: 'instances/dataObjects', component: DataObjectInstanceListComponent},
  {path: 'instances/dataObjects/:id', component: DataObjectInstanceDetailsComponent},
  {path: 'instances/dataElements', component: DataElementInstanceListComponent},
  {path: 'instances/dataElements/:id', component: DataElementInstanceDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(instanceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InstanceRoutingModule {
}
