import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from './interfaces/WeatherResponse';
import { WeatherHourlyResponse } from './interfaces/WeatherHourlyResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


 
  constructor(private httpClient : HttpClient) {
  
  }

  
   apiKey :string = "84d7d7808017043ae6c76664b1604100";
   url:string = "https://api.openweathermap.org/data/2.5/weather?q=";
   oneCallApiUrl = "https://api.openweathermap.org/data/2.5/onecall";
   completeUrl = "https://api.openweathermap.org/data/2.5/weather?q=Firenze&appid=84d7d7808017043ae6c76664b1604100";
  
   httpParams = new HttpParams({
    fromObject :{
      appid:this.apiKey,
      units:'metric'
    }
    
   });

  
  
  getLocalWeather(city:string):Observable<WeatherResponse>{
    return this.httpClient.get<WeatherResponse>(this.url+city,{params:this.httpParams});
  }

  getWeatherDetails(latParam:number,lonParam:number):Observable<WeatherHourlyResponse>{

    let onecallParams = new HttpParams({
      fromObject :{
        appid:this.apiKey,
        units:'metric',
        lat : latParam,
        lon : lonParam
      }
      
     });
    return this.httpClient.get<WeatherHourlyResponse>(this.oneCallApiUrl,{params:onecallParams}
    );
  }

}
