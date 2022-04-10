import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchbooksComponent } from './sketchbooks.component';

describe('SketchbooksComponent', () => {
  let component: SketchbooksComponent;
  let fixture: ComponentFixture<SketchbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SketchbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
