import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { State } from '../../../../graphql-server/src/statesAPI';
import { AddressService } from '../address-service/address.service';
import { ApiStateService } from '../api-state-service/api-state-service';
import { Address } from '../../../../graphql-server/src/watherAPI';

@Component({
  selector: 'app-address-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './address-input.component.html',
  styleUrl: './address-input.component.css'
})
export class AddressInputComponent implements OnInit {
  addressForm!: FormGroup;
  states: State[] = [];
  constructor(private addressService: AddressService,
    private apiStateService: ApiStateService) { }
  ngOnInit(): void {
    this.addressForm = new FormGroup({
      street: new FormControl('', [Validators.required, Validators.minLength(1)]),
      city: new FormControl('', [Validators.required, Validators.minLength(1)]),
      state: new FormControl('', [Validators.required, Validators.minLength(1)])
    })
    this.apiStateService.getStates().subscribe(data => this.states = data.data.states)
  }

  onSubmit() {
    if (this.addressForm.valid) {
      const address: Address = this.addressForm.value;
      this.addressService.addressSource.next(address)
    }
  }
}
