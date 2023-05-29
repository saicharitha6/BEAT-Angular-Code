import { TestBed } from '@angular/core/testing';

import { UpdateRoleGuard } from './update-role.guard';

describe('UpdateRoleGuard', () => {
  let guard: UpdateRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
