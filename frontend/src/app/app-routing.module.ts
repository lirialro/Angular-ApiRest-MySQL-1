import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistadiscosComponent } from './pages/vistadiscos/vistadiscos.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { PutComponent } from './pages/put/put.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: '/discos',
  pathMatch: 'full'
  },

  {
    path: 'discos',
    component: VistadiscosComponent
  },

  {
    path: 'discos/post',
    component: FormularioComponent
  },

  {
    path: 'discos/put',
    component: PutComponent
  },

  {
    path: 'discos/delete',
    component: DeleteComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
