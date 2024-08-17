import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent {
  @Input() weatherData: any;
  @Output() remove = new EventEmitter<void>();
  
  onRemove() {
    this.remove.emit();
  }
}
