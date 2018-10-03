import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HdtAppsConfiguration } from './configuration';

import { ApplicationsService } from './api/applications.service';
import { TasksService } from './api/tasks.service';
import { TransformationsService } from './api/transformations.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    ApplicationsService,
    TasksService,
    TransformationsService ]
})
export class HDTAppsApiModule {
    public static forRoot(configurationFactory: () => HdtAppsConfiguration): ModuleWithProviders {
        return {
            ngModule: HDTAppsApiModule,
            providers: [ { provide: HdtAppsConfiguration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: HDTAppsApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
