import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { RootObject } from "src/app/shared/interfaces/weather.interfaces";
import { environment } from "src/environments/environment";

@Injectable({providedIn : 'root'})
export class WeatherService {
    private readonly API_URL = environment.openWeather.url;

    constructor(private readonly http: HttpClient){}

    public getWeatherByName(city: string): Observable<RootObject>{
        const params = new HttpParams()
        .set('q', city)
        .set('appid', environment.openWeather.key)
        .set('units', 'metric')
        console.log('###### ERROR: ' , `${this.API_URL}/forecast`, { params });
        console.log('###### ERROR: ' + '   api.openweathermap.org/data/2.5/forecast?q=Madrid&appid=2989c66bd7aeabc1963755a6d63ee503');
    
        return this.http.get<RootObject>(`${this.API_URL}/forecast`, { params });    
    }
 
}