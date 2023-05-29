import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeirarchyComponent } from './view-heirarchy.component';

describe('ViewHeirarchyComponent', () => {
  let component: ViewHeirarchyComponent;
  let fixture: ComponentFixture<ViewHeirarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHeirarchyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHeirarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
