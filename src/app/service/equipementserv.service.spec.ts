import { TestBed } from '@angular/core/testing';

import { EquipementservService } from './equipementserv.service';

describe('EquipementservService', () => {
  let service: EquipementservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipementservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
