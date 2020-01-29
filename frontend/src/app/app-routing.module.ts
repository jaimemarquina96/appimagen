import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LeerusuariosComponent } from './componentes/leerusuarios/leerusuarios.component';
import { CrearusuarioComponent } from './componentes/crearusuario/crearusuario.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'leerusuarios',
    component: LeerusuariosComponent
  },
  {
    path: 'crearusuario',
    component: CrearusuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
