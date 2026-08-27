import { Routes } from '@angular/router';
import { SyllabusList } from './syllabus-list/syllabus-list';
import { SyllabusDetail } from './syllabus-detail/syllabus-detail';
import { SyllabusForm } from './syllabus-form/syllabus-form';

export const SYLLABUS_ROUTES: Routes = [
  { path: '', component: SyllabusList },
  { path: 'nuevo', component: SyllabusForm },
  { path: ':id', component: SyllabusDetail },
  { path: ':id/editar', component: SyllabusForm },
];