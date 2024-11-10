import { Component, Input } from '@angular/core';
import { Period } from '../../../../graphql-server/src/watherAPI';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-weather-forecast-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './weather-forecast-item.component.html',
  styleUrl: './weather-forecast-item.component.css'
})
export class WeatherForecastItemComponent {
  @Input() period?:Period = undefined;
}
