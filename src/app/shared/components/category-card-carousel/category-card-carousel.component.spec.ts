import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCardCarouselComponent } from './category-card-carousel.component';

describe('CategoryCardCarouselComponent', () => {
  let component: CategoryCardCarouselComponent;
  let fixture: ComponentFixture<CategoryCardCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryCardCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
