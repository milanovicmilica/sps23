import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashsevenComponent } from './dashseven.component';

describe('DashsevenComponent', () => {
  let component: DashsevenComponent;
  let fixture: ComponentFixture<DashsevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashsevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashsevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
