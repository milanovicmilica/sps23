import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedashComponent } from './archivedash.component';

describe('ArchivedashComponent', () => {
  let component: ArchivedashComponent;
  let fixture: ComponentFixture<ArchivedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
