import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentInfoBlockComponent } from './apartment-info-block.component';

describe('ApartmentInfoBlockComponent', () => {
  let component: ApartmentInfoBlockComponent;
  let fixture: ComponentFixture<ApartmentInfoBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentInfoBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
