import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MaterialListCardComponent } from './material-list-card.component';

describe('MaterialListCardComponent', () => {
  let component: MaterialListCardComponent;
  let fixture: ComponentFixture<MaterialListCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
