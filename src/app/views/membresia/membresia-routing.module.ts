import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembresiaComponent } from './membresia.component';
const routes: Routes = [
  {
    path: '',
    component: MembresiaComponent,
    data: {
      title: 'Membresia'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembresiaRoutingModule {}
