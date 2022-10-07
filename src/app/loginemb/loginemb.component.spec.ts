import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginembComponent } from './loginemb.component';

describe('LoginembComponent', () => {
  let component: LoginembComponent;
  let fixture: ComponentFixture<LoginembComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginembComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginembComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
