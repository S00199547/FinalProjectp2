import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationeryDetailsComponent } from './stationery-details.component';

describe('StationeryDetailsComponent', () => {
  let component: StationeryDetailsComponent;
  let fixture: ComponentFixture<StationeryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationeryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationeryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
