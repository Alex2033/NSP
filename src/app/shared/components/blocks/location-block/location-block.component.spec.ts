import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBlockComponent } from './location-block.component';

describe('LocationBlockComponent', () => {
  let component: LocationBlockComponent;
  let fixture: ComponentFixture<LocationBlockComponent>;

  beforeEach(async(() => {
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
