import { TestBed } from '@angular/core/testing';

import { SonarewardService } from './sonareward.service';

describe('SonarewardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SonarewardService = TestBed.get(SonarewardService);
    expect(service).toBeTruthy();
  });
});
