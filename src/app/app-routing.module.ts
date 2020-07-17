import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContacBoardComponent } from './components/control/contac-board/contac-board.component';
import { LoginComponent } from './components/control/login/login.component';
import { ErrorLoginComponent } from './components/control/error-login/error-login.component';
import { GraciasComponent } from './components/control/gracias/gracias.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'control', component: LoginComponent },
  { path: 'cpanel', component: ContacBoardComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'gracias', component: GraciasComponent },
  { path: 'errorLogin', component: ErrorLoginComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
