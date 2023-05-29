import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationlistComponent } from './organizationlist.component';

describe('OrganizationlistComponent', () => {
  let component: OrganizationlistComponent;
  let fixture: ComponentFixture<OrganizationlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
