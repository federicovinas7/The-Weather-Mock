import { Component, Input, OnInit } from '@angular/core';
import { WeatherHourlyResponse } from '../interfaces/WeatherHourlyResponse';
import { WeatherResponse } from '../interfaces/WeatherResponse';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() weather : WeatherResponse = {} as WeatherResponse; 
  description :any;
  @Input() weatherHourly: WeatherHourlyResponse = {} as WeatherHourlyResponse;
 
  ngOnInit() {
         
  }

 }

 
