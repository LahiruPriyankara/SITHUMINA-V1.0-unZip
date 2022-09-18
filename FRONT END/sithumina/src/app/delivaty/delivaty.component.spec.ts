import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivatyComponent } from './delivaty.component';

describe('DelivatyComponent', () => {
  let component: DelivatyComponent;
  let fixture: ComponentFixture<DelivatyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivatyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
