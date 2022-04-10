import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourpensComponent } from './colourpens.component';

describe('ColourpensComponent', () => {
  let component: ColourpensComponent;
  let fixture: ComponentFixture<ColourpensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourpensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourpensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
