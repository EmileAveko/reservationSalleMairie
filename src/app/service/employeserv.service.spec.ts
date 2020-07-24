import { TestBed } from '@angular/core/testing';

import { EmployeservService } from './employeserv.service';

describe('EmployeservService', () => {
  let service: EmployeservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
