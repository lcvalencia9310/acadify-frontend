import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Necesario con zone.js: sin este provider, Angular 21 arranca en modo
    // "zoneless" y las mutaciones hechas dentro de .subscribe() (patrón usado
    // en toda la app: listas, formularios) nunca disparan un nuevo render,
    // por lo que las pantallas se quedan congeladas en "Cargando...".
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ]
};
