import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcsfirstComponent } from './acsfirst.component';

describe('AcsfirstComponent', () => {
  let component: AcsfirstComponent;
  let fixture: ComponentFixture<AcsfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcsfirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcsfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
