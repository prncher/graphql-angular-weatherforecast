import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AddressService } from './address-service/address.service';
import { ApiPeriodsService } from './api-periods-service/api-periods-service';
import { ApiStateService } from './api-state-service/api-state-service';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    let service: AddressService;
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi()),
        AddressService,
        ApiStateService,
        ApiPeriodsService]
    }).compileComponents();
    service = TestBed.inject(AddressService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'graphql-angular-weatherforecast' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('graphql-angular-weatherforecast');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, graphql-angular-weatherforecast');
  // });
});
