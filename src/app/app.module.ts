import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import {HttpModule, Http} from '@angular/http';
import { Router } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { routing } from './app.routing';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/index';
import { AppHeaderComponent } from './components/app-header/index';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { TwitterService } from 'ng2-twitter';
import { AsideDirective } from './directives/aside/index';
import { NavDropdownDirective, NavDropdownToggleDirective } from './directives/nav-dropdown/index';
import { SidebarToggleDirective, SidebarMinimizeDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective } from './directives/sidebar/index';
import { MembresiasComponent } from './view/membresias/index';
import { LabsComponent } from './view/membresias/labs/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    CarouselComponent,
    AsideDirective,
    NavDropdownDirective,
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective,
    NavDropdownToggleDirective,
    FooterComponent,
    MembresiasComponent,
    LabsComponent

  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    TimepickerModule.forRoot(),
    routing,
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
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
