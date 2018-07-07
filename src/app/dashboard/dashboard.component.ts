import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weatherReport;
  busStopReport;
  dayNightReport;
  densityReport;
  channelFeed;

  constructor(private http: HttpClient) {
    this.http.get('https://api.thingspeak.com/channels/482383/feeds.json?results=2').subscribe((value) => {
      this.channelFeed = value;
    });

  }
  // this.http.get('https://api.thingspeak.com/channels/462880/fields/1.json?results=2').subscribe(value => {
  //   this.weatherReport = value;
  //   console.log(value);
  // });


  // this.http.get('https://api.thingspeak.com/channels/462880/fields/4.json?results=2').subscribe(value => {
  //   this.busStopReport = value;
  //   console.log(value);
  // });

  // this.http.get('https://api.thingspeak.com/channels/462880/fields/2.json?results=2').subscribe(value => {
  //   this.dayNightReport = value;
  //   console.log(value);
  // });

  // this.http.get('https://api.thingspeak.com/channels/462880/fields/3.json?results=2').subscribe(value => {
  //   this.densityReport = value;
  //   console.log(value);
  // });

  ngOnInit() {
  }

}
