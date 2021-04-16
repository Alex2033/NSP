import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExtendedCompanyCardComponent } from './extended-company-card.component';

describe('ExtendedCompanyCardComponent', () => {
  let component: ExtendedCompanyCardComponent;
  let fixture: ComponentFixture<ExtendedCompanyCardComponent>;

  beforeEach(waitForAsync(() => {
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
