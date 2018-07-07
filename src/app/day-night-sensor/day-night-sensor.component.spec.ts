import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayNightSensorComponent } from './day-night-sensor.component';

describe('DayNightSensorComponent', () => {
  let component: DayNightSensorComponent;
  let fixture: ComponentFixture<DayNightSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayNightSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayNightSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
