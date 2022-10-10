import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginprocessingComponent } from './loginprocessing.component';

describe('LoginprocessingComponent', () => {
  let component: LoginprocessingComponent;
  let fixture: ComponentFixture<LoginprocessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginprocessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginprocessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
