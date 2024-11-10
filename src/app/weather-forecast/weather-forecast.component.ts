import { Component, OnInit } from '@angular/core';
import { Address, Period } from '../../../../graphql-server/src/watherAPI';
import { AddressService } from '../address-service/address.service';
import { ApiPeriodsService } from '../api-periods-service/api-periods-service';
import { WeatherForecastItemComponent } from '../weather-forecast-item/weather-forecast-item.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [WeatherForecastItemComponent,NgFor,NgIf],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.css'
})
export class WeatherForecastComponent implements OnInit {
  periods: Period[] = [];
  errors:Array<any> = [];
  constructor(private addressService: AddressService,
    private periodsService: ApiPeriodsService
  ) { }
  ngOnInit(): void {
    this.addressService.addressSource.subscribe(value => {
      if (value.city && value.state && value.street) {
        this.getForecast(value)
      }
    })
  }
  getForecast(address: Address) {
    const { city, state, street } = address;
    this.periodsService.getPeriods(street, city, state).subscribe(data => {
      this.periods = data.data.periods || []
      this.errors = data.errors || []
    });
  }
}
