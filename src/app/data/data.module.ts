import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';

import {DataOverviewComponent} from './data-overview.component';
import {DataValueListComponent} from './data-value-list.component';
import {DataValueDetailsComponent} from './data-value-details.component';

import {DataValueFormComponent} from './data-value-form.component';
import {ContentTypeValidatorDirective} from './content-type-validator.directive';

import {PdfViewerModule} from 'ng2-pdf-viewer';

import {DataRoutingModule} from './data-routing.module';

import {PaginationModule} from "../pagination/pagination.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataRoutingModule,
    PdfViewerModule,
    FileUploadModule,
    PaginationModule
  ],
  declarations: [
    DataOverviewComponent,
    DataValueListComponent,
    DataValueDetailsComponent,
    DataValueFormComponent,
    ContentTypeValidatorDirective
  ]
})
export class DataModule {
}
