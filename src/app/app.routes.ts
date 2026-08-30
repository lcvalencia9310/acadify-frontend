import { Routes } from '@angular/router';
import { AppLayout } from './shared/layout/app-layout';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { authGuard } from './core/auth-guard';




export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'registro', component: Register },
  {
    path: '',
    component: AppLayout,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'syllabus', pathMatch: 'full' },
      { path: 'syllabus', loadChildren: () => import('./syllabus/syllabus.routes').then(m => m.SYLLABUS_ROUTES) },
      { path: 'programa', loadChildren: () => import('./programa/programa.routes').then(m => m.PROGRAMA_ROUTES) },
      { path: 'asignatura', loadChildren: () => import('./asignatura/asignatura.routes').then(m => m.ASIGNATURA_ROUTES) },
      { path: 'resultado-aprendizaje', loadChildren: () => import('./resultado-aprendizaje/resultado-aprendizaje.routes').then(m => m.RESULTADO_ROUTES) },
    ],
  },
];