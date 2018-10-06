import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TransformationsOverviewComponent} from './transformations-overview.component';
import {DtBundleListComponent} from "./bundles/dt-bundle-list.component";
import {DtBundleDetailsComponent} from "./bundles/dt-bundle-details.component";
import {DtBundleFormComponent} from "./bundles/dt-bundle-form.component";

const transformationRoutes: Routes = [
  {path: 'transformations', component: TransformationsOverviewComponent},
  {path: 'transformations/bundles', component: DtBundleListComponent},
  {path: 'transformations/bundles/:id', component: DtBundleDetailsComponent},
  {path: 'transformations/bundles?create', component: DtBundleFormComponent},
  // {path: 'transformations/transformationTasks', component: DataTransformationListComponent},
  // {path: 'transformations/transformationTasks/:id', component: DataTransformationDetailsComponent},
  // {path: 'transformations/transformationTasks?create', component: DataTransformationFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(transformationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransformationsRoutingModule {
}
