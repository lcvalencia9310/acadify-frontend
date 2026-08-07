import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./syllabus/syllabus.routes').then(m => m.SYLLABUS_ROUTES) },
];