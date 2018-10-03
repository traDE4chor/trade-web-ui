import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { DataDependencyGraphService } from './api/dataDependencyGraph.service';
import { DataElementService } from './api/dataElement.service';
import { DataElementInstanceService } from './api/dataElementInstance.service';
import { DataModelService } from './api/dataModel.service';
import { DataObjectService } from './api/dataObject.service';
import { DataObjectInstanceService } from './api/dataObjectInstance.service';
import { DataValueService } from './api/dataValue.service';
import { NotificationService } from './api/notification.service';
import { NotifierServiceService } from './api/notifierService.service';
import { ResourceEventFilterService } from './api/resourceEventFilter.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    DataDependencyGraphService,
    DataElementService,
    DataElementInstanceService,
    DataModelService,
    DataObjectService,
    DataObjectInstanceService,
    DataValueService,
    NotificationService,
    NotifierServiceService,
    ResourceEventFilterService ]
})
export class TraDeApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: TraDeApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: TraDeApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
