import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingBase } from './routing-base';

describe('RoutingBase', () => {
  let component: RoutingBase;
  let fixture: ComponentFixture<RoutingBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingBase],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingBase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
