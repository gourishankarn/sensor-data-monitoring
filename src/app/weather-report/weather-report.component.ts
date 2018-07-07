import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})

export class WeatherReportComponent implements OnInit {

  channelFeed;

  constructor(private http: HttpClient) {
    this.http.get('https://api.thingspeak.com/channels/482383/feeds.json?results=2').subscribe((value) => {
      this.channelFeed = value;
    });

  }

  ngOnInit() {
  }

}
