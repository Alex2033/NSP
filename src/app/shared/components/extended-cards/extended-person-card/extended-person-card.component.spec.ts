import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExtendedPersonCardComponent } from './extended-person-card.component';

describe('ExtendedPersonCardComponent', () => {
  let component: ExtendedPersonCardComponent;
  let fixture: ComponentFixture<ExtendedPersonCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedPersonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedPersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
