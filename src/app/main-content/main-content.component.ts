import { Component, Input, OnInit } from '@angular/core';
import { Hourly, WeatherHourlyResponse } from '../interfaces/WeatherHourlyResponse';
import { WeatherResponse } from '../interfaces/WeatherResponse';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  @Input() weatherObj: WeatherResponse = {} as WeatherResponse;
  @Input()hourlyArray : Hourly[] = [];
  @Input()weatherHourly : WeatherHourlyResponse = {} as WeatherHourlyResponse;
  img = {
    'clear sky' : 'clear',
    'few clouds' : 'mostly-sunny',
    'scattered clouds' : 'cloudy',
    'overcast clouds' : 'very-cloudy',
    'broken clouds' : 'mostly-cloudy',
    'moderate rain' : 'light-rain',
    'shower rain' : 'showers',
    'light rain' : 'light rain',
    'rain' : 'heavy-rain',
    'thunderstorm' : 'thunderstorm',
    'thunderstorm with heavy rain': 'thunderstorm',
    'snow' : 'snow',
    'fog' : 'fog',
    'mist' : 'fog'
   }
   ngOnInit(){

   }
 
  
   

 
  constructor() { 
    
  }

  


//   getLocalWeather(){
//     this.weatherService.getLocalWeather('Mar del Plata').subscribe(data=>{
//       this.weatherObj = data;
//       this.weatherObj.hora =this.timeConverter(this.weatherObj.dt); 
//       this.lat = data.coord.lat;
//       this.lon = data.coord.lon;
//       this.getWeatherDetails();
//       this.switchImage(data.weather[0].description);
//     });
//   }

  
//  getWeatherDetails(){
//        this.weatherService.getWeatherDetails(this.lat,this.lon).subscribe(data=>{
//          this.hourlyArray = data.hourly;
//          //this.setTime();
//          this.hourlyArray.forEach(element => {

//           element.image = this.switchImages(element.weahter[0].description); 
          
//         });
//        })
        
      
// }

 
// switchImage(paramDescprition : string){

//   let image = document.getElementById("image") as HTMLElement;
 
  
//   switch (paramDescprition){

//     case 'clear sky':
//       image.classList.add('sunny');
//       break;
//     case 'few clouds':
//       image.classList.add('mostly-sunny');
//       break;
//     case 'scattered clouds':
//       image.classList.add('cloudy');
//       break;
//     case 'overcast clouds':
//       image.classList.add('very-cloudy');
//       break;
//     case 'broken clouds':
//       image.classList.add('mostly-cloudy');
//       break;
//     case 'moderate rain':
//       image.classList.add('light-rain');
//       break;
//     case 'shower rain' :
//       image.classList.add('showers');
//       break;
//     case 'light rain' :
//       image.classList.add('light-rain');
//       break;
//     case 'rain' :
//       image.classList.add('heavy-rain');
//       break;
//     case 'thunderstorm' :
//       image.classList.add('thunderstorm');
//       break;
//     case 'thunderstorm with heavy rain' :
//       image.classList.add('thunderstorm');
//       break;
//     case 'snow' :
//       image.classList.add('snow');
//       break;
//     case 'fog':
//       image.classList.add('fog');
//       break;
//     case 'mist':
//         image.classList.add('fog');
//         break;
//   }
// }


// timeConverter(timestamp : number):string{
  
//   let date = new Date(timestamp*1000);
//   let hours= date.toTimeString().slice(0,2);
   
//   return hours+":00";
// }

// setTime(){
//   this.hourlyArray.forEach(h=>{
//     h.hora = this.timeConverter(h.dt);
    
//   });

// }
// setImages(){
//   this.hourlyArray.forEach(element => {

//     element.image = this.switchImages(element.weahter[0].description); 
    
//   });
// }

//  switchImages(description : string):string{

//    let keys = Object.keys(this.img);
//    let values = Object.values(this.img);
//    let val = ''
//    for(let i = 0; i < keys.length ; i++){
//      if (keys[i]=== description)
//        val = values[i];
//    }
//    console.log(val);
//       return val;
//  }
 

}
