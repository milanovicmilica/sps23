import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathreportComponent } from './pathreport.component';

describe('PathreportComponent', () => {
  let component: PathreportComponent;
  let fixture: ComponentFixture<PathreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
