import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialListCardComponent } from './material-list-card.component';

describe('MaterialListCardComponent', () => {
  let component: MaterialListCardComponent;
  let fixture: ComponentFixture<MaterialListCardComponent>;

  beforeEach(async(() => {
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
