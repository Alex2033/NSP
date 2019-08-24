import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplineAdvertisingComponent } from './topline-advertising.component';

describe('ToplineAdvertisingComponent', () => {
  let component: ToplineAdvertisingComponent;
  let fixture: ComponentFixture<ToplineAdvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplineAdvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplineAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
