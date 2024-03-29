import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvertisingCardComponent } from './advertising-card.component';

describe('AdvertisingCardComponent', () => {
  let component: AdvertisingCardComponent;
  let fixture: ComponentFixture<AdvertisingCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
