import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedCompanyCardComponent } from './extended-company-card.component';

describe('ExtendedCompanyCardComponent', () => {
  let component: ExtendedCompanyCardComponent;
  let fixture: ComponentFixture<ExtendedCompanyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedCompanyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedCompanyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
