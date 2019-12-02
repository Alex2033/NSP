import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistrationBlockComponent } from './event-registration-block.component';

describe('EventRegistrationBlockComponent', () => {
  let component: EventRegistrationBlockComponent;
  let fixture: ComponentFixture<EventRegistrationBlockComponent>;

  beforeEach(async(() => {
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
