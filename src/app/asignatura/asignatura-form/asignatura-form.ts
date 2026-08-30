import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { AsignaturaService } from '../asignatura';
import { ProgramaService } from '../../programa/programa';
import { Programa } from '../../programa/programa.model';

@Component({
  selector: 'app-asignatura-form',
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './asignatura-form.html',
  styleUrl: './asignatura-form.scss',
})
export class AsignaturaForm implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private service = inject(AsignaturaService);
  private programaService = inject(ProgramaService);

  isNew = true;
  currentId: number | null = null;
  programas: Programa[] = [];

  form = this.fb.group({
    codigoAsignatura: ['', Validators.required],
    nombreAsignatura: ['', Validators.required],
    creditos: [1, Validators.required],
    intensidadHoraria: [1, Validators.required],
    idPrograma: [null as number | null, Validators.required],
  });

  ngOnInit() {
    this.programaService.getAll().subscribe((data) => {
      this.programas = data;
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    this.isNew = !idParam;

    if (idParam) {
      this.currentId = Number(idParam);
      this.service.getById(this.currentId).subscribe((asignatura) => {
        this.form.patchValue({
          codigoAsignatura: asignatura.codigoAsignatura,
          nombreAsignatura: asignatura.nombreAsignatura,
          creditos: asignatura.creditos,
          intensidadHoraria: asignatura.intensidadHoraria,
          idPrograma: asignatura.programa?.idPrograma ?? null,
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
      codigoAsignatura: valor.codigoAsignatura!,
      nombreAsignatura: valor.nombreAsignatura!,
      creditos: valor.creditos!,
      intensidadHoraria: valor.intensidadHoraria!,
      programa: { idPrograma: valor.idPrograma! },
    };

    if (this.isNew) {
      this.service.create(payload as any).subscribe({
        next: () => this.router.navigate(['/asignatura']),
        error: (err) => console.error('Error al crear la asignatura:', err),
      });
    } else if (this.currentId) {
      this.service.update(this.currentId, payload as any).subscribe({
        next: () => this.router.navigate(['/asignatura']),
        error: (err) => console.error('Error al actualizar la asignatura:', err),
      });
    }
  }
}
