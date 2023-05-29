import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyOrganizationComponent } from './hierarchy-organization.component';

describe('HierarchyOrganizationComponent', () => {
  let component: HierarchyOrganizationComponent;
  let fixture: ComponentFixture<HierarchyOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchyOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchyOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
