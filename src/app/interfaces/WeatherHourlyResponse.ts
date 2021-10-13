import { Weather } from "./WeatherResponse"

export interface WeatherHourlyResponse{

    timezone_offset :number,
    timezone:string,
    hourly : Hourly []
    weather :Weather[],
    
    current: {
        sunrise: number,
        sunset: number,
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        dew_point: number,
        uvi: number,
        clouds: number,
        visibility: number,
        wind_speed: number,
        wind_deg: number,
        rain:{
            '1h':number,
        },
       
        
      }
      daily: Daily[]
}
export interface Daily{

    sunset : number,
    sunrise : number,
    moonrise : number,
    moonset : number,
    moon_phase : number,
    dew_point : number,


}
export interface Hourly{

    id: number,
    dt: number,
    temp : number,
    pressure : number,
    humidity : number,
    weather : Weather[],
    pop : number,
    rain : {
        '1h':number
    },
    hora : string,
    image : string,

}
