import { TestBed } from '@angular/core/testing';

import { CreateOrgGuard } from './create-org.guard';

describe('CreateOrgGuard', () => {
  let guard: CreateOrgGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateOrgGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
