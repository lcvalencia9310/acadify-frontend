import { Routes } from '@angular/router';
import { SyllabusLayout } from './syllabus-layout/syllabus-layout';
import { SyllabusList } from './syllabus-list/syllabus-list';
import { SyllabusDetail } from './syllabus-detail/syllabus-detail';
import { SyllabusForm } from './syllabus-form/syllabus-form';

export const SYLLABUS_ROUTES: Routes = [
  {
    path: '',
    component: SyllabusLayout,
    children: [
      { path: '', redirectTo: 'syllabus', pathMatch: 'full' },
      { path: 'syllabus', component: SyllabusList },
      { path: 'syllabus/nuevo', component: SyllabusForm },
      { path: 'syllabus/:id', component: SyllabusDetail },
      { path: 'syllabus/:id/editar', component: SyllabusForm },
    ],
  },
];