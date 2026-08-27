import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ProgramaService } from '../programa';

@Component({
  selector: 'app-programa-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './programa-form.html',
  styleUrl: './programa-form.scss',
})
export class ProgramaForm implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private service = inject(ProgramaService);

  isNew = true;
  currentId: number | null = null;

  form = this.fb.group({
    codigoPrograma: ['', Validators.required],
    nombrePrograma: ['', Validators.required],
    activo: [true],
  });

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.isNew = !idParam;

    if (idParam) {
      this.currentId = Number(idParam);
      this.service.getById(this.currentId).subscribe((programa) => {
        this.form.patchValue(programa);
      });
    }
  }

  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const valor = this.form.getRawValue();

    if (this.isNew) {
      this.service.create(valor as any).subscribe({
        next: () => this.router.navigate(['/programa']),
        error: (err) => console.error('Error al crear el programa:', err),
      });
    } else if (this.currentId) {
      this.service.update(this.currentId, valor as any).subscribe({
        next: () => this.router.navigate(['/programa']),
        error: (err) => console.error('Error al actualizar el programa:', err),
      });
    }
  }
}
