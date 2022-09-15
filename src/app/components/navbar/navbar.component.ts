import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/pages/weather/services/weather.service';
import { RootObject } from 'src/app/shared/interfaces/weather.interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  public weather$!: Observable<RootObject>;

  cityName: any;

  constructor(private readonly weatherService: WeatherService){}

  public onSearch(city: string): void{  

    this.weather$ = this.weatherService.getWeatherByName(city);
    console.log("hola",this.weather$)
  }
}
