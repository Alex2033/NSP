import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventRegistrationBlockComponent } from './event-registration-block.component';

describe('EventRegistrationBlockComponent', () => {
  let component: EventRegistrationBlockComponent;
  let fixture: ComponentFixture<EventRegistrationBlockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRegistrationBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRegistrationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
