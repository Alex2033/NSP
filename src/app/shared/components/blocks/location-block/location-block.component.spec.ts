import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LocationBlockComponent } from './location-block.component';

describe('LocationBlockComponent', () => {
  let component: LocationBlockComponent;
  let fixture: ComponentFixture<LocationBlockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
