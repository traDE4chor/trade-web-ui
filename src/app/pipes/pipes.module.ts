import {NgModule} from '@angular/core';
import {ResolveResourceIdPipe} from "./resolve-resource-id.pipe";


@NgModule({
  declarations: [
    ResolveResourceIdPipe
  ],
  exports: [
    ResolveResourceIdPipe
  ]
})
export class CustomPipesModule {
}
