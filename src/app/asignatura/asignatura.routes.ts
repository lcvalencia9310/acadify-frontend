import { Routes } from '@angular/router';
import { AsignaturaList } from './asignatura-list/asignatura-list';
import { AsignaturaForm } from './asignatura-form/asignatura-form';

export const ASIGNATURA_ROUTES: Routes = [
  { path: '', component: AsignaturaList },
  { path: 'nuevo', component: AsignaturaForm },
  { path: ':id/editar', component: AsignaturaForm },
];