import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulerCategoriesComponent } from './populer-categories.component';

describe('PopulerCategoriesComponent', () => {
  let component: PopulerCategoriesComponent;
  let fixture: ComponentFixture<PopulerCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulerCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulerCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
