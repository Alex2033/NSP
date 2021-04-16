import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImageCarouselBlockComponent } from './image-carousel-block.component';

describe('ImageCarouselBlockComponent', () => {
  let component: ImageCarouselBlockComponent;
  let fixture: ComponentFixture<ImageCarouselBlockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCarouselBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCarouselBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
