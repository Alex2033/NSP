import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventCalendarCardComponent } from './event-calendar-card.component';

describe('EventCalendarCardComponent', () => {
  let component: EventCalendarCardComponent;
  let fixture: ComponentFixture<EventCalendarCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCalendarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCalendarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
