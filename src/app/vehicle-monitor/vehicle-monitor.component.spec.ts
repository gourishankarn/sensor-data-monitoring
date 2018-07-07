import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMonitorComponent } from './vehicle-monitor.component';

describe('VehicleMonitorComponent', () => {
  let component: VehicleMonitorComponent;
  let fixture: ComponentFixture<VehicleMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
