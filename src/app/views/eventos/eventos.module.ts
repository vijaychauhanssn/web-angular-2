import { NgModule } from '@angular/core';
import { EventosComponent } from './eventos.component';
import { EventosRoutingModule } from './eventos-routing.module';
import {CommonModule} from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    EventosRoutingModule,
    ],
  declarations: [ EventosComponent
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class EventosModule { }
