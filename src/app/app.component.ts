import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherCardComponent } from './Components/weather-card/weather-card.component';
import { WeatherService } from './Services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherCardComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practice Project Angular Level 2';
  weatherCards: any[] = [];
  zipcode = '';

  constructor(private weatherService: WeatherService) {
  }


  onSubmit() {
    if (this.zipcode) {
      this.weatherService.getWeather(this.zipcode).subscribe(
        (data) => {
          // Assuming `data` is the weather information you need
          this.weatherCards.push(data);
          this.zipcode = ''; // Clear the input after submission
        },
        (error) => {
          console.error('Error fetching weather data', error);
        }
      );
    }
  }

  removeCard(index: number) {
    this.weatherCards.splice(index, 1);
  }
}
