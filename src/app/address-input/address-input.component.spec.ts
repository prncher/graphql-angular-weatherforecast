import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInputComponent } from './address-input.component';
import { AddressService } from '../address-service/address.service';
import { ApiStateService } from '../api-state-service/api-state-service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AddressInputComponent', () => {
  let component: AddressInputComponent;
  let fixture: ComponentFixture<AddressInputComponent>;

  beforeEach(async () => {
    let service: AddressService;
    let service2:ApiStateService;
    await TestBed.configureTestingModule({
      imports: [AddressInputComponent],
      providers:[provideHttpClient(withInterceptorsFromDi()),AddressService,ApiStateService]
    })
    .compileComponents();
    service = TestBed.inject(AddressService);
    service2 = TestBed.inject(ApiStateService);

    fixture = TestBed.createComponent(AddressInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
