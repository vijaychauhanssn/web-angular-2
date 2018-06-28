import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import {HttpModule, Http} from '@angular/http';
import { Router } from '@angular/router';
// Import routing module
import { AppRoutingModule } from './app.routing';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AppComponent } from './app.component';
import { TwitterService } from 'ng2-twitter';
import { AsideDirective } from './directives/aside/index';
import { NavDropdownDirective, NavDropdownToggleDirective } from './directives/nav-dropdown/index';
import { SidebarToggleDirective, SidebarMinimizeDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective } from './directives/sidebar/index';
import { AppBreadcrumbs, AppFooter, AppHeader } from './components';
// Import containers
import {  FullLayout, SimpleLayout } from './containers';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter,
    AppBreadcrumbs,
    AppHeader,
    AsideDirective,
    FullLayout,
    SimpleLayout,
    NavDropdownDirective,
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective,
    NavDropdownToggleDirective
  ],
 imports: [
    BrowserModule,
    TimepickerModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
  TwitterService,
  HttpClientModule,
  HttpModule,
  Http,
  {
  provide: LocationStrategy,
  useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
