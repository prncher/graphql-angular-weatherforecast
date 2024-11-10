import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AddressService } from './address-service/address.service';
import { ApiStateService } from './api-state-service/api-state-service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiPeriodsService } from './api-periods-service/api-periods-service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient(withInterceptorsFromDi()),
     AddressService,
     ApiStateService,
     ApiPeriodsService]
};

