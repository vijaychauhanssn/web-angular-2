import { NgModule }   from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/index';
import { HomeComponent } from './view/home/index';
import { MembresiasComponent } from './view/membresias/index';
import { LabsComponent } from './view/membresias/labs/index';

const appRoutes: Routes = [
    { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    },
    { 
    path: 'app-header',
    component: AppHeaderComponent
    },
    { 
    path: 'app-header',
    component: MembresiasComponent
    },
    { 
    path: 'app-header',
    component: LabsComponent
    },

];


export const routing = RouterModule.forRoot(appRoutes);