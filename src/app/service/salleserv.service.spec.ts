import { TestBed } from '@angular/core/testing';

import { SalleservService } from './salleserv.service';

describe('SalleservService', () => {
  let service: SalleservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalleservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
