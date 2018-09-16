import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatorComponent} from "./paginator.component";
import {LayoutComponent} from "../ui/layout/layout.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaginatorComponent
  ],
  exports: [PaginatorComponent]
})
export class PaginationModule {
}
