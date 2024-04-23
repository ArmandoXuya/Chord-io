import { NgModule } from '@angular/core';
import {canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),...canActivate(()=>redirectUnauthorizedTo(['login']))
  },
  {
    path: 'transponce',
    loadChildren: () => import('./pages/transponce/transponce.module').then( m => m.TransponcePageModule),...canActivate(()=>redirectUnauthorizedTo(['login']))
  },
  {
    path: 'misnotas',
    loadChildren: () => import('./pages/misnotas/misnotas.module').then( m => m.MisnotasPageModule),...canActivate(()=>redirectUnauthorizedTo(['login']))
  },
  {
    path: 'escalamayor',
    loadChildren: () => import('./pages/escalamayor/escalamayor.module').then( m => m.EscalamayorPageModule),...canActivate(()=>redirectUnauthorizedTo(['login']))
  },
  {
    path: 'escalamenor',
    loadChildren: () => import('./pages/escalamenor/escalamenor.module').then( m => m.EscalamenorPageModule),...canActivate(()=>redirectUnauthorizedTo(['login']))
  },
  {
    path: 'escalabluess',
    loadChildren: () => import('./pages/escalabluess/escalabluess.module').then( m => m.EscalabluessPageModule),...canActivate(()=>redirectUnauthorizedTo(['login']))
  },
  {
    path: 'escala-arabe',
    loadChildren: () => import('./pages/escala-arabe/escala-arabe.module').then( m => m.EscalaArabePageModule),...canActivate(()=>redirectUnauthorizedTo(['login']))
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'restclave',
    loadChildren: () => import('./pages/restclave/restclave.module').then( m => m.RestclavePageModule)
  },
  {
    path: 'registrocantos',
    loadChildren: () => import('./pages/registrocantos/registrocantos.module').then( m => m.RegistrocantosPageModule),...canActivate(()=>redirectUnauthorizedTo(['login']))
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
