import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { SyllabusService } from '../syllabus';
import { AsignaturaService } from '../../asignatura/asignatura';
import { Asignatura } from '../../asignatura/asignatura.model';

@Component({
  selector: 'app-syllabus-form',
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './syllabus-form.html',
  styleUrl: './syllabus-form.scss',
})
export class SyllabusForm implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private service = inject(SyllabusService);
  private asignaturaService = inject(AsignaturaService);

  isNew = true;
  currentId: number | null = null;
  asignaturas: Asignatura[] = [];

  form = this.fb.group({
    descripcion: ['', Validators.required],
    idAsignatura: [null as number | null, Validators.required],
  });

  ngOnInit() {
    this.asignaturaService.getAll().subscribe((data) => {
      this.asignaturas = data;
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    this.isNew = !idParam;

    if (idParam) {
      this.currentId = Number(idParam);
      this.service.getById(this.currentId).subscribe((syllabus) => {
        this.form.patchValue({
          descripcion: syllabus.descripcion,
          idAsignatura: syllabus.asignatura?.idAsignatura ?? null,
        });
      });
    }
  }

  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const valor = this.form.getRawValue();

    const payload = {
      descripcion: valor.descripcion!,
      asignatura: { idAsignatura: valor.idAsignatura! },
    };

    if (this.isNew) {
      this.service.create(payload as any).subscribe({
        next: () => this.router.navigate(['/syllabus']),
        error: (err) => console.error('Error al crear el syllabus:', err),
      });
    } else if (this.currentId) {
      this.service.update(this.currentId, payload as any).subscribe({
        next: () => this.router.navigate(['/syllabus']),
        error: (err) => console.error('Error al actualizar el syllabus:', err),
      });
    }
  }
}
