import { Component, Input, OnInit } from '@angular/core';
import { Hourly } from '../interfaces/WeatherHourlyResponse';

@Component({
  selector: 'hourly-card',
  templateUrl: './hourly-card.component.html',
  styleUrls: ['./hourly-card.component.css']
})
export class HourlyCardComponent implements OnInit {


  @Input()hourly : Hourly[] = [];
  constructor() { }

  ngOnInit() {
    
  
   
  }
 
  
}
