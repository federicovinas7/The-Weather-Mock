import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TinyCardComponent } from './tiny-card/tiny-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HourlyCardComponent } from './hourly-card/hourly-card.component';
import { TodayCardComponent } from './today-card/today-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TinyCardComponent,
    NavbarComponent,
    MainContentComponent,
    HourlyCardComponent,
    TodayCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
