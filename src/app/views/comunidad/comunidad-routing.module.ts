import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComunidadComponent } from './comunidad.component';
const routes: Routes = [
  {
    path: '',
    component: ComunidadComponent,
    data: {
      title: 'Comunidad'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunidadRoutingModule {}
