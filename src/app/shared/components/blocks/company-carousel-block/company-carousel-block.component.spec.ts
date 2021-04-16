import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompanyCarouselBlockComponent } from './company-carousel-block.component';

describe('CompanyCarouselBlockComponent', () => {
  let component: CompanyCarouselBlockComponent;
  let fixture: ComponentFixture<CompanyCarouselBlockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCarouselBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCarouselBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
