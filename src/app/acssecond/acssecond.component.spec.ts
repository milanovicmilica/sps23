import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcssecondComponent } from './acssecond.component';

describe('AcssecondComponent', () => {
  let component: AcssecondComponent;
  let fixture: ComponentFixture<AcssecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcssecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcssecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
