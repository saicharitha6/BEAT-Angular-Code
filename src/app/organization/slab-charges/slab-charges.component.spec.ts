import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlabChargesComponent } from './slab-charges.component';

describe('SlabChargesComponent', () => {
  let component: SlabChargesComponent;
  let fixture: ComponentFixture<SlabChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlabChargesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlabChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
