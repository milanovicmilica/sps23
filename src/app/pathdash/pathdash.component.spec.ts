import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathdashComponent } from './pathdash.component';

describe('PathdashComponent', () => {
  let component: PathdashComponent;
  let fixture: ComponentFixture<PathdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
