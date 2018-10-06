import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaginationModule} from "../pagination/pagination.module";

import {TransformationsOverviewComponent} from './transformations-overview.component';

import {TransformationsRoutingModule} from './transformations-routing.module';
import {DtBundleDetailsComponent} from "./bundles/dt-bundle-details.component";
import {DtBundleFormComponent} from "./bundles/dt-bundle-form.component";
import {DtBundleListComponent} from "./bundles/dt-bundle-list.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TransformationsRoutingModule,
    PaginationModule
  ],
  declarations: [
    TransformationsOverviewComponent,
    DtBundleListComponent,
    DtBundleDetailsComponent,
    DtBundleFormComponent
  ]
})
export class TransformationsModule {}
