import { TestBed } from '@angular/core/testing';

import { TargetService } from './target-service.service';

describe('TargetServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TargetService = TestBed.get(TargetService);
    expect(service).toBeTruthy();
  });
});
