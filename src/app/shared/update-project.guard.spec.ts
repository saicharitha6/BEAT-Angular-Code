import { TestBed } from '@angular/core/testing';

import { UpdateProjectGuard } from './update-project.guard';

describe('UpdateProjectGuard', () => {
  let guard: UpdateProjectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateProjectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
