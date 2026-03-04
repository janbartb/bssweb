import { ApplicationConfig, inject, LOCALE_ID, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { Speech } from './services/speech';
import { registerLocaleData, DecimalPipe } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
registerLocaleData(localeNl);

export const appConfig: ApplicationConfig = {
    providers: [
        DecimalPipe,
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        { provide: LOCALE_ID, useValue: "nl-NL" },
        provideAppInitializer(() => {
            const spraak = inject(Speech);
            spraak.initialize('Google Nederlands');
        })
    ]
};
