import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOffersComponent } from './special-offers.component';

describe('SpecialOffersComponent', () => {
  let component: SpecialOffersComponent;
  let fixture: ComponentFixture<SpecialOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
