import { Routes } from '@angular/router';
import { ProgramaList } from './programa-list/programa-list';
import { ProgramaForm } from './programa-form/programa-form';

export const PROGRAMA_ROUTES: Routes = [
  { path: '', component: ProgramaList },
  { path: 'nuevo', component: ProgramaForm },
  { path: ':id/editar', component: ProgramaForm },
];