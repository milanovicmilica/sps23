import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheightComponent } from './dasheight.component';

describe('DasheightComponent', () => {
  let component: DasheightComponent;
  let fixture: ComponentFixture<DasheightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasheightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasheightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
