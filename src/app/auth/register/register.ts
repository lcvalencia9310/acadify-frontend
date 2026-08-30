import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  errorMensaje = '';

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  async registrar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.errorMensaje = '';
    const { email, password } = this.form.getRawValue();

    try {
      await this.authService.registrar(email!, password!);
      this.router.navigate(['/syllabus']);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        this.errorMensaje = 'Ese correo ya está registrado.';
      } else if (error.code === 'auth/weak-password') {
        this.errorMensaje = 'La contraseña debe tener al menos 6 caracteres.';
      } else {
        this.errorMensaje = 'Ocurrió un error al registrar la cuenta.';
      }
      console.error('Error al registrar:', error);
    }
  }
}