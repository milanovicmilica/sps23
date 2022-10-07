import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashsixComponent } from './dashsix.component';

describe('DashsixComponent', () => {
  let component: DashsixComponent;
  let fixture: ComponentFixture<DashsixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashsixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
