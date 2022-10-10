import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginaccessioningComponent } from './loginaccessioning.component';

describe('LoginaccessioningComponent', () => {
  let component: LoginaccessioningComponent;
  let fixture: ComponentFixture<LoginaccessioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginaccessioningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginaccessioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
