import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherCardComponent } from './Components/weather-card/weather-card.component';
import { WeatherService } from './Services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practice Project Angular Level 2';
  weatherCards: any[] = [];
  zipcode = '';

  constructor(private weatherService: WeatherService) {
  }

  fetchWeather() {
    this.weatherService.getWeather(this.zipcode).subscribe((data) => {
      this.weatherCards.push({ weatherData: data });
    });
  }

  removeCard(index: number) {
    this.weatherCards.splice(index, 1);
  }
}
