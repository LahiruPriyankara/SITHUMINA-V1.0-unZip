import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessOrFailComponent } from './payment-success-or-fail.component';

describe('PaymentSuccessOrFailComponent', () => {
  let component: PaymentSuccessOrFailComponent;
  let fixture: ComponentFixture<PaymentSuccessOrFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSuccessOrFailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSuccessOrFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
