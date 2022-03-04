import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getWeatherReport(cityName, unit) {
    console.log('Calling weather report');
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=' + unit + '&appid=96515635eb4dcf5e13817062e35e51b9');
  }
}
