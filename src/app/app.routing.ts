import { NgModule }   from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Containers
import {  FullLayout, SimpleLayout } from './containers';

export const routes: Routes = [
  { 
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
  },
  {
   path: '',
    component: FullLayout,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'membresias',
        loadChildren: './views/membresias/membresias.module#MembresiasModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule'
      },
      {
        path: 'comunidad',
        loadChildren: './views/comunidad/comunidad.module#ComunidadModule'
      },
      {
        path: 'membresia',
        loadChildren: './views/membresia/membresia.module#MembresiaModule'
      },
      {
        path: 'contacto',
        loadChildren: './views/contacto/contacto.module#ContactoModule'
      },
      {
        path: 'eventos',
        loadChildren: './views/eventos/eventos.module#EventosModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
