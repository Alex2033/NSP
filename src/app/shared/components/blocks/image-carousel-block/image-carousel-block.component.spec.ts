import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCarouselBlockComponent } from './image-carousel-block.component';

describe('ImageCarouselBlockComponent', () => {
  let component: ImageCarouselBlockComponent;
  let fixture: ComponentFixture<ImageCarouselBlockComponent>;

  beforeEach(async(() => {
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
