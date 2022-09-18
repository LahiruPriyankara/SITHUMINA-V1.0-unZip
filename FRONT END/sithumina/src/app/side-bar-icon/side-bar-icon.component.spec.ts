import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarIconComponent } from './side-bar-icon.component';

describe('SideBarIconComponent', () => {
  let component: SideBarIconComponent;
  let fixture: ComponentFixture<SideBarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
