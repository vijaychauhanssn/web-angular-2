import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { LabsComponent } from './labs.component';
import { FlexComponent } from './flex.component';
import { DeskComponent } from './desk.component';
import { OfficeComponent } from './office.component';
import { MembresiasComponent } from './membresias.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// Routing Membresias
import { MembresiasRoutingModule } from './membresias-routing.module';

@NgModule({
  imports: [ MembresiasRoutingModule,
  CommonModule,
  CarouselModule
  ],
  declarations: [
    LabsComponent,
    MembresiasComponent,
    FlexComponent,
    DeskComponent,
    OfficeComponent
  ]
})
export class MembresiasModule {}
