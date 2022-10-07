import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstainerComponent } from './addstainer.component';

describe('AddstainerComponent', () => {
  let component: AddstainerComponent;
  let fixture: ComponentFixture<AddstainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
