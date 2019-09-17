import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewsOfferFormComponent } from './modal-news-offer-form.component';

describe('ModalNewsOfferFormComponent', () => {
  let component: ModalNewsOfferFormComponent;
  let fixture: ComponentFixture<ModalNewsOfferFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewsOfferFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewsOfferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
