import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-monitor',
  templateUrl: './vehicle-monitor.component.html',
  styleUrls: ['./vehicle-monitor.component.css']
})
export class VehicleMonitorComponent implements OnInit {

  channelFeed;

  constructor(private http: HttpClient) {
    this.http.get('https://api.thingspeak.com/channels/482383/feeds.json?results=2').subscribe((value) => {
      this.channelFeed = value;
    });

  }

  ngOnInit() {
  }

}
