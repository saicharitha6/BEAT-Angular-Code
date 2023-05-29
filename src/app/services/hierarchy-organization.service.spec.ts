import { TestBed } from '@angular/core/testing';

import { HierarchyOrganizationService } from './hierarchy-organization.service';

describe('HierarchyOrganizationService', () => {
  let service: HierarchyOrganizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HierarchyOrganizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
