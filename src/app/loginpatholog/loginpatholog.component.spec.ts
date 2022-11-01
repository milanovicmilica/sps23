import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpathologComponent } from './loginpatholog.component';

describe('LoginpathologComponent', () => {
  let component: LoginpathologComponent;
  let fixture: ComponentFixture<LoginpathologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpathologComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginpathologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
