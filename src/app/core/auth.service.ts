import { Injectable } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { firebaseApp } from './firebase.config';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = getAuth(firebaseApp);

  // Guarda el usuario actual (o null si no ha iniciado sesión)
  private usuarioActualSubject = new BehaviorSubject<User | null>(null);
  usuarioActual$: Observable<User | null> = this.usuarioActualSubject.asObservable();

  constructor() {
    // Escucha automáticamente los cambios de sesión (login/logout)
    onAuthStateChanged(this.auth, (user) => {
      this.usuarioActualSubject.next(user);
    });
  }

  registrar(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  iniciarSesion(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  cerrarSesion() {
    return signOut(this.auth);
  }

  obtenerToken(): Promise<string | null> {
    const user = this.auth.currentUser;
    return user ? user.getIdToken() : Promise.resolve(null);
  }
}