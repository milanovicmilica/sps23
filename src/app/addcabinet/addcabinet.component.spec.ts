import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcabinetComponent } from './addcabinet.component';

describe('AddcabinetComponent', () => {
  let component: AddcabinetComponent;
  let fixture: ComponentFixture<AddcabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcabinetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
