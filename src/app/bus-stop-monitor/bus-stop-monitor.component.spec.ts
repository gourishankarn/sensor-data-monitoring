import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusStopMonitorComponent } from './bus-stop-monitor.component';

describe('BusStopMonitorComponent', () => {
  let component: BusStopMonitorComponent;
  let fixture: ComponentFixture<BusStopMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusStopMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusStopMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
