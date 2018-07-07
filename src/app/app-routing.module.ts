import { DayNightSensorComponent } from './day-night-sensor/day-night-sensor.component';
import { VehicleMonitorComponent } from './vehicle-monitor/vehicle-monitor.component';
import { BusStopMonitorComponent } from './bus-stop-monitor/bus-stop-monitor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';

const routes: Routes = [{
  path: '', component: DashboardComponent
},
{
  path: 'dashboard', component: DashboardComponent
}, {
  path: 'weather-report', component: WeatherReportComponent
}, {
  path: 'busstop-monitor', component: BusStopMonitorComponent
}, {
  path: 'vehicle-monitor', component: VehicleMonitorComponent
}, {
  path: 'day-night-monitor', component: DayNightSensorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
