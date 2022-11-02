import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathinfoComponent } from './pathinfo.component';

describe('PathinfoComponent', () => {
  let component: PathinfoComponent;
  let fixture: ComponentFixture<PathinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
