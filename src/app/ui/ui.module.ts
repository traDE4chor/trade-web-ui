import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule {
}
