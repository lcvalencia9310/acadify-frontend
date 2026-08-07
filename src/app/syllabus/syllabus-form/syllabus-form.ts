import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { SyllabusService } from '../syllabus';

@Component({
  selector: 'app-syllabus-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './syllabus-form.html',
  styleUrl: './syllabus-form.scss',
})
export class SyllabusForm implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private service = inject(SyllabusService);

  isNew = true;
  currentId: number | null = null;

  form = this.fb.group({
    nombreAsignatura: ['', Validators.required],
    descripcion: [''],
    creditos: [1, Validators.required],
    intensidadHoraria: [1, Validators.required],
    programaAcademico: ['', Validators.required],
  });

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.isNew = !idParam;

    if (idParam) {
      this.currentId = Number(idParam);
      this.service.getById(this.currentId).subscribe((syllabus) => {
        this.form.patchValue(syllabus);
      });
    }
  }

guardar() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    console.warn('Formulario inválido, revisa los campos obligatorios.');
    return;
  }

  const valor = this.form.getRawValue();
  console.log('Enviando datos:', valor);

  if (this.isNew) {
    this.service.create(valor as any).subscribe({
      next: (respuesta) => {
        console.log('Syllabus creado:', respuesta);
        this.router.navigate(['/syllabus']);
      },
      error: (err) => {
        console.error('Error al crear el syllabus:', err);
      },
    });
  } else if (this.currentId) {
    this.service.update(this.currentId, valor as any).subscribe({
      next: (respuesta) => {
        console.log('Syllabus actualizado:', respuesta);
        this.router.navigate(['/syllabus']);
      },
      error: (err) => {
        console.error('Error al actualizar el syllabus:', err);
      },
    });
  }
}
}
