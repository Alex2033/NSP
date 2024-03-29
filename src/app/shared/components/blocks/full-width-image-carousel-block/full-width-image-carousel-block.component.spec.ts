import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FullWidthImageCarouselBlockComponent } from './full-width-image-carousel-block.component';

describe('FullWidthImageCarouselBlockComponent', () => {
  let component: FullWidthImageCarouselBlockComponent;
  let fixture: ComponentFixture<FullWidthImageCarouselBlockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FullWidthImageCarouselBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidthImageCarouselBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
