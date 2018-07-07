import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  channelFeed;
  weatherReport;
  dayNightReport;
  busStopReport;
  densityReport;

  sidenav = [
    {
      name: 'Dashboard',
      icon: 'tachometer alternate',
      link: 'dashboard'
    },
    {
      name: 'Weather Report',
      link: 'weather-report',
      icon: 'snowflake'
    }, {
      name: 'Smart Busstop',
      link: 'busstop-monitor',
      icon: 'bus'
    }, {
      name: 'Day / Night',
      link: 'day-night-monitor',
      icon: 'sun outline'
    }, {
      name: 'Vehicle Monitoring',
      link: 'vehicle-monitor',
      icon: 'car'
    }];

  ngOnInit() {
    $(document).ready(() => {
      $('.ui.sidebar')
        .sidebar()
        ;
    });
  }

  constructor(private http: HttpClient) {

    // ds.getRainSensorValue().subscribe(value => {
    //   this.weatherReport = value;
    //   console.log(value);
    // });

    // ds.getIvrValue().subscribe(value => {
    //   this.busStopReport = value;
    //   console.log(value);
    // }); ds.getLdrValue().subscribe(value => {
    //   this.dayNightReport = value;
    //   console.log(value);
    // });
    // ds.getProximitySensorValue().subscribe(value => {
    //   this.densityReport = value;
    //   console.log(value);
    // });

    // this.http.get('https://api.thingspeak.com/channels/482383/feeds.json?api_key=JL2DVR4KQPWFW6U3&results=2')
    //   .subscribe((value) => {
    //     this.channelFeed = value;
    //     this.getWeatherReport();
    //     this.getDayNightReport();
    //     this.getbusStopReport();
    //     this.getDensityReport();
    //   }, error => {
    //     console.log(error);
    //   });
  }

  // getDensityReport() {
  //   if (this.channelFeed.field1 > 1000) {
  //     this.densityReport = 'Heavy density on the road';
  //   } else {
  //     this.densityReport = 'Normal Density';
  //   }
  // }

  // getWeatherReport() {
  //   if (this.channelFeed.field3 > 300) {
  //     this.weatherReport = 'High Temprature';
  //   } else if (this.channelFeed.field3 < 300 && this.channelFeed.field1 > 200) {
  //     this.weatherReport = 'Normal Temprature';
  //   } else {
  //     this.weatherReport = 'Low temprature';
  //   }
  // }

  // getDayNightReport() {
  //   if (this.channelFeed.field4 > 400) {
  //     this.dayNightReport = 'It is day time street should turn off';
  //   } else {
  //     this.dayNightReport = 'It is night time street light should turn on ';

  //   }
  // }

  // getbusStopReport() {
  //   if (this.channelFeed.field5 > 400) {
  //     this.busStopReport = 'peoples are standing in bus stop bus has to stop';
  //   } else {
  //     this.busStopReport = 'peoples are not present in bustop';
  //   }
  // }
}
