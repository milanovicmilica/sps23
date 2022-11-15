import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatheditComponent } from './pathedit.component';

describe('PatheditComponent', () => {
  let component: PatheditComponent;
  let fixture: ComponentFixture<PatheditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatheditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatheditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
