import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import 'zone.js';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { InitService } from './core/services/init-service';
import { lastValueFrom } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideZoneChangeDetection(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAppInitializer(async () => {
      const initService = inject(InitService);
      return lastValueFrom(initService.init()).finally(() => {
        const splash = document.getElementById('initial-splash');
        if (splash) {
          splash.remove();
        }
      });
    }),
  ],
};
