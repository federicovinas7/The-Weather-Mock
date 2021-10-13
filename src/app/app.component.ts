import { Component } from '@angular/core';
import { Hourly, WeatherHourlyResponse } from './interfaces/WeatherHourlyResponse';
import { WeatherResponse } from './interfaces/WeatherResponse';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WeatherService]
})
export class AppComponent {

  img = {
    'clear sky' : 'clear',
    'few clouds' : 'mostly-sunny',
    'scattered clouds' : 'cloudy',
    'overcast clouds' : 'very-cloudy',
    'broken clouds' : 'mostly-cloudy',
    'moderate rain' : 'light-rain',
    'heavy intensity rain' : 'rain',
    'shower rain' : 'showers',
    'light rain' : 'light-rain',
    'rain' : 'heavy-rain',
    'thunderstorm' : 'thunderstorm',
    'thunderstorm with heavy rain': 'thunderstorm',
    'snow' : 'snow',
    'fog' : 'fog',
    'mist' : 'fog'
   }
  title = 'The Weather Mock';

  weatherData : WeatherResponse = {} as WeatherResponse;

  weatherHourly : WeatherHourlyResponse = {} as WeatherHourlyResponse;
  hourlyArray : Hourly [] = []  ;

  description : string = '';
  lat : any;
  lon : any;

  constructor(private weatherService : WeatherService){

    

  }
  ngOnInit(){
    this.getWeatherData();
    
    this.setTime();
    this.setSearchBox();
  }


  getWeatherData(city?:string){
      
    city === undefined || city === null ? city = 'Mar del Plata' : city = city;
      this.weatherService.getLocalWeather(city).subscribe(data=>{
      this.weatherData = data;
      this.lat = data.coord.lat;
      this.lon = data.coord.lon;
     
      
      this.getWeatherDetails(data.coord.lat,data.coord.lon);
      this.weatherData.hora =this.timeConverter(this.weatherData.dt);
      this.switchImage(data.weather[0].description);
      let hourNow = this.weatherData.hora;
      if(parseInt(hourNow) >19 || parseInt(hourNow) >=0 && parseInt(hourNow)<6){
        let body = document.querySelector('body') as HTMLElement;
        body.classList.add('background-night');
      }
      if(parseInt(hourNow) >=13 && parseInt(hourNow) <19){
        let body = document.querySelector('body') as HTMLElement;
        body.classList.add('background-afternoon');
      }
   
    }); 
   }

    
  getWeatherDetails(pLat : number, pLon:number){
      
       this.weatherService.getWeatherDetails(pLat,pLon).subscribe(data=>{
         this.weatherHourly = data;
         console.log(data);
         data.hourly.forEach(h=>{
          h.id = data.hourly.indexOf(h);
          h.hora = this.timeConverter(h.dt);
          h.image = this.switchImages(h.weather[0].description,h.hora);
          
        });
        
        
         this.hourlyArray = data.hourly;   
         console.log(data.hourly);
       })
  
}

    


timeConverter(timestamp : number):string{
  
  let date = new Date(timestamp*1000);
  let hours= date.toTimeString().slice(0,2);
   
  return hours+":00";
}

setTime(){
  this.hourlyArray.forEach(h=>{
    h.hora = this.timeConverter(h.dt);
    
  });
}

setImages(){

}

switchImage(paramDescprition : string){

    
  let image = document.getElementById("image") as HTMLElement;
 
  switch (paramDescprition){

    case 'clear sky':
      image.classList.add('clear');
      break;
    case 'few clouds':
      image.classList.add('mostly-sunny');
      break;
    case 'scattered clouds':
      image.classList.add('cloudy');
      break;
    case 'overcast clouds':
      image.classList.add('very-cloudy');
      break;
    case 'broken clouds':
      image.classList.add('mostly-cloudy');
      break;
    case 'moderate rain':
      image.classList.add('light-rain');
      break;
    case 'shower rain' :
      image.classList.add('showers');
      break;
    case 'light rain' :
      image.classList.add('light-rain');
      break;
    case 'rain' :
      image.classList.add('heavy-rain');
      break;
    case 'thunderstorm' :
      image.classList.add('thunderstorm');
      break;
    case 'thunderstorm with heavy rain' :
      image.classList.add('thunderstorm');
      break;
    case 'snow' :
      image.classList.add('snow');
      break;
    case 'fog':
      image.classList.add('fog');
      break;
    case 'mist':
        image.classList.add('fog');
        break;
  }

}


 switchImages(description : string,hour:string):string{

   let keys = Object.keys(this.img);
   let values = Object.values(this.img);
   let val = ''
   for(let i = 0; i < keys.length ; i++){
     if (keys[i]=== description)
       val = values[i];
   }
   
   if(parseInt(hour) > 19 || parseInt(hour)===0 || parseInt(hour)<6 )
      val+="-night";
  
      return val;
 }

 setSearchBox(){

  let searchBtn = document.getElementById('search-btn');
  searchBtn?.addEventListener('click',()=>{
    
    this.search();
  })
 }
async search(){

  let value = document.getElementById("search") as HTMLInputElement;
 

  if(typeof value.value ==='string')
    this.getWeatherData(value.value);
  // if (typeof value ==='number')
  // this.weatherService.getByZipCode();

}
  
}
