import { TestBed } from '@angular/core/testing';

import { CreateEmpGuard } from './create-emp.guard';

describe('CreateEmpGuard', () => {
  let guard: CreateEmpGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateEmpGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
