import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressInputComponent } from './address-input/address-input.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddressInputComponent, WeatherForecastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'graphql-angular-weatherforecast';
}
