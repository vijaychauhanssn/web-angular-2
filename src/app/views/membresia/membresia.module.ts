import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MembresiaComponent } from './membresia.component';
import { MembresiaRoutingModule } from './membresia-routing.module';

@NgModule({
  imports: [
    MembresiaRoutingModule,
    CommonModule
  ],
  declarations: [ MembresiaComponent ]
})
export class MembresiaModule { }
