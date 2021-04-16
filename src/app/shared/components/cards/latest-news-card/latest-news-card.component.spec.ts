import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LatestNewsCardComponent } from './latest-news-card.component';

describe('LatestNewsCardComponent', () => {
  let component: LatestNewsCardComponent;
  let fixture: ComponentFixture<LatestNewsCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestNewsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
