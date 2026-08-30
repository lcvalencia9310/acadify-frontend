// layout-state.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutStateService {
  private readonly _sidenavOpen = signal(true);
  readonly sidenavOpen = this._sidenavOpen.asReadonly();

  toggleSidenav(): void {
    this._sidenavOpen.update(v => !v);
  }
}