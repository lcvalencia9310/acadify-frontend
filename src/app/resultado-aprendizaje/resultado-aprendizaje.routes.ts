import { Routes } from '@angular/router';
import { ResultadoList } from './resultado-list/resultado-list';
import { ResultadoForm } from './resultado-form/resultado-form';

export const RESULTADO_ROUTES: Routes = [
  { path: '', component: ResultadoList },
  { path: 'nuevo', component: ResultadoForm },
  { path: ':id/editar', component: ResultadoForm },
];