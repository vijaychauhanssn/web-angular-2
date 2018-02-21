import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos.component';
import { CommonModule } from '@angular/common';

 const routes: Routes = [
  {
    path: '',
    component: EventosComponent,
    data: {
      title: 'Eventos'
    }
  }
 
];

@NgModule({
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  ],
  exports: [RouterModule]
})
export class EventosRoutingModule {}
