import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { DayNightSensorComponent } from './day-night-sensor/day-night-sensor.component';
import { BusStopMonitorComponent } from './bus-stop-monitor/bus-stop-monitor.component';
import { VehicleMonitorComponent } from './vehicle-monitor/vehicle-monitor.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WeatherReportComponent,
    DayNightSensorComponent,
    BusStopMonitorComponent,
    VehicleMonitorComponent
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
