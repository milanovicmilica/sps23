import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathaddgroupComponent } from './pathaddgroup.component';

describe('PathaddgroupComponent', () => {
  let component: PathaddgroupComponent;
  let fixture: ComponentFixture<PathaddgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathaddgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathaddgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
