import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDataComponent } from './cart-data.component';

describe('CartDataComponent', () => {
  let component: CartDataComponent;
  let fixture: ComponentFixture<CartDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
