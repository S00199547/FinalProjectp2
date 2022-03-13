import { TestBed } from '@angular/core/testing';

import { StationeryService } from './stationery.service';

describe('StationeryService', () => {
  let service: StationeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
