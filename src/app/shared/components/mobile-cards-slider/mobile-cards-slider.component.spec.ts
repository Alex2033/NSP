import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileCardsSliderComponent } from './mobile-cards-slider.component';

describe('MobileCardsSliderComponent', () => {
  let component: MobileCardsSliderComponent;
  let fixture: ComponentFixture<MobileCardsSliderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCardsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCardsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
