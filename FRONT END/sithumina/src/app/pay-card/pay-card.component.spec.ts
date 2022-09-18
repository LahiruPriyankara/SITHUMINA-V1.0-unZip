import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCardComponent } from './pay-card.component';

describe('PayCardComponent', () => {
  let component: PayCardComponent;
  let fixture: ComponentFixture<PayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
