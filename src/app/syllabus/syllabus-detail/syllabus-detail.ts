import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { SyllabusService } from '../syllabus';

@Component({
  selector: 'app-syllabus-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './syllabus-detail.html',
  styleUrl: './syllabus-detail.scss',
})
export class SyllabusDetail {
  private route = inject(ActivatedRoute);
  private service = inject(SyllabusService);

  syllabus$ = this.route.paramMap.pipe(
    switchMap((p) => this.service.getById(Number(p.get('id'))))
  );
}
