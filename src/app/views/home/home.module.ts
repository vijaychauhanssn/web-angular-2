import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {CommonModule} from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {  AppCarousel } from '../../components';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    CarouselModule.forRoot()
  ],
  declarations: [ HomeComponent,
   AppCarousel
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class HomeModule { }
