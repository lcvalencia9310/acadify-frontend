import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ResultadoAprendizajeService } from '../resultado-aprendizaje';
import { AsignaturaService } from '../../asignatura/asignatura';
import { Asignatura } from '../../asignatura/asignatura.model';

@Component({
  selector: 'app-resultado-form',
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './resultado-form.html',
  styleUrl: './resultado-form.scss',
})
export class ResultadoForm implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private service = inject(ResultadoAprendizajeService);
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
      this.service.getById(this.currentId).subscribe((resultado) => {
        this.form.patchValue({
          descripcion: resultado.descripcion,
          idAsignatura: resultado.asignatura?.idAsignatura ?? null,
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
        next: () => this.router.navigate(['/resultado-aprendizaje']),
        error: (err) => console.error('Error al crear el resultado:', err),
      });
    } else if (this.currentId) {
      this.service.update(this.currentId, payload as any).subscribe({
        next: () => this.router.navigate(['/resultado-aprendizaje']),
        error: (err) => console.error('Error al actualizar el resultado:', err),
      });
    }
  }
}
