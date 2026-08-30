import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { take, map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.usuarioActual$.pipe(
    take(1),
    map((usuario) => {
      if (usuario) {
        return true; // hay sesión activa, deja pasar
      }
      router.navigate(['/login']);
      return false; // no hay sesión, bloquea y redirige
    })
  );
};
