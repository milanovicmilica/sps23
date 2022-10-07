import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StainingComponent } from './staining.component';

describe('StainingComponent', () => {
  let component: StainingComponent;
  let fixture: ComponentFixture<StainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
