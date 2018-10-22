import { TestBed } from '@angular/core/testing';

import { ConmonService } from './conmon.service';

describe('ConmonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConmonService = TestBed.get(ConmonService);
    expect(service).toBeTruthy();
  });
});
