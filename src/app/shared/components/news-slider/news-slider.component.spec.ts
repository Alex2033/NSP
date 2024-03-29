import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsSliderComponent } from './news-slider.component';

describe('NewsSliderComponent', () => {
  let component: NewsSliderComponent;
  let fixture: ComponentFixture<NewsSliderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
