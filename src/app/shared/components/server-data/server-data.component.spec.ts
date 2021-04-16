import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServerDataComponent } from './server-data.component';

describe('ServerDataComponent', () => {
  let component: ServerDataComponent;
  let fixture: ComponentFixture<ServerDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
