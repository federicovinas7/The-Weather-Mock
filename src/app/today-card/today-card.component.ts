import { Component, Input, OnInit } from '@angular/core';
import { WeatherHourlyResponse } from '../interfaces/WeatherHourlyResponse';
import { WeatherResponse } from '../interfaces/WeatherResponse';

@Component({
  selector: 'today-card',
  templateUrl: './today-card.component.html',
  styleUrls: ['./today-card.component.css']
})
export class TodayCardComponent implements OnInit {

  @Input() weather : WeatherResponse = {} as WeatherResponse; 
  @Input() weatherHourly : WeatherHourlyResponse = {} as WeatherHourlyResponse;


  constructor() { }

  ngOnInit(): void {
   
  }

setMoonPhase(number : number):string{

  if(number === 0 || number ===1)
  return 'new moon';
  if (number ===0.25)
  return 'first quarter moon';
  if(number === 0.5)
  return 'full moon';
  if(number >0 && number < 0.25)
  return 'waxing crescent';
  if(number >0.25 && number <0.5)
  return 'waxing gibous';
  if(number >0.5 && number<0.75)
  return 'waning gibous';
  if(number>0.75 && number<1)
  return 'waning crescent';

  return 'last quarter moon';
}

}
