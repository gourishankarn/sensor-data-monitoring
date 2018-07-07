import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-stop-monitor',
  templateUrl: './bus-stop-monitor.component.html',
  styleUrls: ['./bus-stop-monitor.component.css']
})
export class BusStopMonitorComponent implements OnInit {

  channelFeed;

  constructor(private http: HttpClient) {
    this.http.get('https://api.thingspeak.com/channels/482383/feeds.json?results=2').subscribe((value) => {
      this.channelFeed = value;
    });
  }

  ngOnInit() {
  }

}
