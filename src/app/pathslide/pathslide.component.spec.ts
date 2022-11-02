import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathslideComponent } from './pathslide.component';

describe('PathslideComponent', () => {
  let component: PathslideComponent;
  let fixture: ComponentFixture<PathslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathslideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
