import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {UiModule} from './ui/ui.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AppRoutingModule} from './app-routing.module';
import {DataModule} from './data/data.module';
import {InstancesModule} from './instances/instances.module';
import {ModelsModule} from './models/models.module';
import {NotificationsModule} from './notifications/notifications.module';
import {TransformationsModule} from './transformations/transformations.module';

import {BASE_PATH} from './trade-client/variables';
import {environment} from '../environments/environment';

import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from './trade-client/api.module';

import {AppComponent} from './app.component';
import { ResolveResourceIdPipe } from './pipes/resolve-resource-id.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    InstancesModule,
    ModelsModule,
    NotificationsModule,
    TransformationsModule,
    HttpClientModule,
    ApiModule,
    AppRoutingModule,
    UiModule,
    AngularFontAwesomeModule
  ],
  providers: [
    {provide: BASE_PATH, useValue: environment.API_BASE_PATH}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
