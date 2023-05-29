import { TestBed } from '@angular/core/testing';

import { UpdateOrgGuard } from './update-org.guard';

describe('UpdateOrgGuard', () => {
  let guard: UpdateOrgGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateOrgGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
