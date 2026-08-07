import { Routes } from '@angular/router';
import { SyllabusLayout } from './syllabus/syllabus-layout/syllabus-layout';
import { SyllabusList } from './syllabus/syllabus-list/syllabus-list';
import { SyllabusDetail } from './syllabus/syllabus-detail/syllabus-detail';
import { SyllabusForm } from './syllabus/syllabus-form/syllabus-form';

export const SYLLABUS_ROUTES: Routes = [
  {
    path: '',
    component: SyllabusLayout,
    children: [
      { path: '', redirectTo: 'syllabus', pathMatch: 'full' },
      { path: 'syllabus', component: SyllabusList },
      { path: 'syllabus/:id', component: SyllabusDetail },
      { path: 'syllabus/:id/editar', component: SyllabusForm },
    ],
  },
];