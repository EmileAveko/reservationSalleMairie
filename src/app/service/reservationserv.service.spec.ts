import { TestBed } from '@angular/core/testing';

import { ReservationservService } from './reservationserv.service';

describe('ReservationservService', () => {
  let service: ReservationservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
