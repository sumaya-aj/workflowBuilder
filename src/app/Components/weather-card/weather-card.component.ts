import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherData } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent {
  @Input() weatherData!: WeatherData;
  @Output() remove = new EventEmitter<void>();
  
  onRemove() {
    this.remove.emit();
  }
}
