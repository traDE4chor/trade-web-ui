import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';

import { DataDependencyGraphApi } from './api/DataDependencyGraphApi';
import { DataElementApi } from './api/DataElementApi';
import { DataElementInstanceApi } from './api/DataElementInstanceApi';
import { DataModelApi } from './api/DataModelApi';
import { DataObjectApi } from './api/DataObjectApi';
import { DataObjectInstanceApi } from './api/DataObjectInstanceApi';
import { DataValueApi } from './api/DataValueApi';
import { NotificationApi } from './api/NotificationApi';
import { NotifierServiceApi } from './api/NotifierServiceApi';
import { ResourceEventFilterApi } from './api/ResourceEventFilterApi';

@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [],
  exports:      [],
  providers:    [ DataDependencyGraphApi, DataElementApi, DataElementInstanceApi, DataModelApi, DataObjectApi,
  DataObjectInstanceApi, DataValueApi, NotificationApi, NotifierServiceApi, ResourceEventFilterApi ]
})
export class ApiModule {
    public static forConfig(configuration: Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ {provide: Configuration, useValue: configuration}]
        }
    }
}
