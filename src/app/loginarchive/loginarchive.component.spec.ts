import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginarchiveComponent } from './loginarchive.component';

describe('LoginarchiveComponent', () => {
  let component: LoginarchiveComponent;
  let fixture: ComponentFixture<LoginarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginarchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
