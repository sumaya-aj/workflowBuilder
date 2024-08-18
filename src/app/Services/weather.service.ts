import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  private appId: string = '5a4b2d457ecbef9eb2a71e480b947604';

  constructor(private http: HttpClient) { }

  getWeather(zipcode: string): Observable<any> {
    const url = `${this.baseUrl}?zip=${zipcode},us&appid=${this.appId}&units=imperial`;
    return this.http.get(url);
  }
}
