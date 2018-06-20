import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ApiModule } from '../trade-client/api.module';

import { DataOverviewComponent } from './data-overview.component';
import { DataValueListComponent } from './data-value-list.component';
import { DataValueDetailsComponent } from './data-value-details.component';

import { DataRoutingModule } from './data-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataRoutingModule
  ],
  declarations: [
    DataOverviewComponent,
    DataValueListComponent,
    DataValueDetailsComponent
  ]
})
export class DataModule {}
