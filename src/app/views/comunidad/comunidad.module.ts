import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ComunidadComponent } from './comunidad.component';
import { ComunidadRoutingModule } from './comunidad-routing.module';

@NgModule({
  imports: [
    ComunidadRoutingModule,
    CommonModule
  ],
  declarations: [ ComunidadComponent ]
})
export class ComunidadModule { }
