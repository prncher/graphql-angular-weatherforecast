import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastComponent } from './weather-forecast.component';
import { AddressService } from '../address-service/address.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiPeriodsService } from '../api-periods-service/api-periods-service';

describe('WeatherForecastComponent', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;

  beforeEach(async () => {
    let service: AddressService;
    let service2:ApiPeriodsService;

    await TestBed.configureTestingModule({
      imports: [WeatherForecastComponent],
      providers:[provideHttpClient(withInterceptorsFromDi()),AddressService,ApiPeriodsService]
    })
    .compileComponents();
    service = TestBed.inject(AddressService);
    service2 = TestBed.inject(ApiPeriodsService);

    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
