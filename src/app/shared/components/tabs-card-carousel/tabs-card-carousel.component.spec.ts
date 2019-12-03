import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCardCarouselComponent } from './tabs-card-carousel.component';

describe('TabsCardCarouselComponent', () => {
  let component: TabsCardCarouselComponent;
  let fixture: ComponentFixture<TabsCardCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsCardCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
