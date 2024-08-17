import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(zipcode: string): Observable<any> {
    return this.http.get(`https://openweathermap.org/api?key=5a4b2d457ecbef9eb2a71e480b947604&q=${zipcode}`);
  }
}
