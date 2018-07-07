import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-night-sensor',
  templateUrl: './day-night-sensor.component.html',
  styleUrls: ['./day-night-sensor.component.css']
})
export class DayNightSensorComponent implements OnInit {

  channelFeed;

  constructor(private http: HttpClient) {
    this.http.get('https://api.thingspeak.com/channels/482383/feeds.json?results=2').subscribe((value) => {
      this.channelFeed = value;
    });

  }

  ngOnInit() {
  }

}
