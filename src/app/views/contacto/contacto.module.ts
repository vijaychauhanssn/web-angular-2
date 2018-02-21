import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { ContactoRoutingModule } from './contacto-routing.module';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ContactoRoutingModule,
    CommonModule,
     HttpClientModule,
    FormsModule
  ],
  declarations: [ ContactoComponent ]
})
export class ContactoModule { }
