import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Hourly } from '../interfaces/WeatherHourlyResponse';

@Component({
  selector: 'tiny-card',
  templateUrl: './tiny-card.component.html',
  styleUrls: ['./tiny-card.component.css']
})
export class TinyCardComponent implements OnInit,AfterViewInit {

  @Input()hourly : Hourly[] =[];


  constructor() { }

  ngOnInit() {

    
  }
  ngAfterViewInit(){
    let arr = document.getElementsByClassName('tiny-card-icon') ;
    
    for( let i = 0; i < arr.length; i++){
        console.log("poronga");
    }
  }
 
}
