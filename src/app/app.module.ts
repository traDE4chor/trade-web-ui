import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
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

import {TRADE_BASE_PATH} from './trade-client/variables';
import {environment} from '../environments/environment';

import {HttpClientModule} from '@angular/common/http';
import {TraDeApiModule} from './trade-client/api.module';

import {AppComponent} from './app.component';
import {AppConfigService} from './services/app-config.service';
import {HDT_BASE_PATH, HDTAppsApiModule} from "./hdtapps-client";

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

const getHdtBasePath = (appConfig: AppConfigService) => {
  return appConfig.getConfig()['HDT_API_BASE_PATH'];
};

const getTradeBasePath = (appConfig: AppConfigService) => {
  return appConfig.getConfig()['TRADE_API_BASE_PATH'];
};


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
    TraDeApiModule,
    HDTAppsApiModule,
    AppRoutingModule,
    UiModule,
    AngularFontAwesomeModule
  ],
  providers: [
    {
      provide: TRADE_BASE_PATH, useFactory: getTradeBasePath,
      deps: [AppConfigService]
    },
    {
      provide: HDT_BASE_PATH, useFactory: getHdtBasePath,
      deps: [AppConfigService]
    },
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
