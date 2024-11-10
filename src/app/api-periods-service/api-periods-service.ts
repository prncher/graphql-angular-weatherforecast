import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Period } from '../../../../graphql-server/src/watherAPI'

interface PeriodData {
    data: { periods: Period[] }
    errors: Array<any>
}
@Injectable()
export class ApiPeriodsService {
    constructor(private http: HttpClient) { }
    getPeriods(street: string, city: string, state: string): Observable<PeriodData> {
        const query = {
            query: `{
                  periods(street: "${street}", city: "${city}", state: "${state}") {
                        name
          startTime
          endTime
          isDaytime
          temperature
          temperatureUnit
          temperatureTrend
          probabilityOfPrecipitation {
            unitCode
            value
          }
          windSpeed
          windDirection
          icon
          shortForecast
          detailedForecast
                  }
                }
                  `};
        const body = JSON.stringify(query);
        const options = {
            headers: {
                "Content-Type": "application/json"
            },
        }
        const url = `http://localhost:4000/graphql`;
        return this.http.post<PeriodData>(url, body, options);
    }
}