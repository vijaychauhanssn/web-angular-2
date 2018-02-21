import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeskComponent } from './desk.component';
import { MembresiasComponent } from './membresias.component';
import { FlexComponent } from './flex.component';
import { LabsComponent } from './labs.component';
import { OfficeComponent } from './office.component';

 const routes: Routes = [
  {
    path: '',
    children: [
       {
        path: 'desk',
        component: DeskComponent,
        data: {
          title: 'Desk'
        }
      },
      {
        path: 'flex',
        component: FlexComponent,
        data: {
          title: 'Flex'
        }
      },
      {
        path: 'labs',
        component: LabsComponent,
        data: {
          title: 'Labs'
        }
      },
      {
        path: 'office',
        component: OfficeComponent,
        data: {
          title: 'Office'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
  RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembresiasRoutingModule {}

