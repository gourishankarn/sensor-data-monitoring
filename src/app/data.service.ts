import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getRainSensorValue() {
    return this.http.get('https://api.thingspeak.com/channels/482383/fields/1.json?results=2');
  }

  getProximitySensorValue() {
    return this.http.get('https://api.thingspeak.com/channels/482383/fields/4.json?results=2');
  }

  getIvrValue() {
    return this.http.get('https://api.thingspeak.com/channels/482383/fields/2.json?results=2');
  }

  getLdrValue() {
    return this.http.get('https://api.thingspeak.com/channels/482383/fields/3.json?results=2');
  }
}
