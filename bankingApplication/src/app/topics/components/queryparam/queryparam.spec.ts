import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Queryparam } from './queryparam';

describe('Queryparam', () => {
  let component: Queryparam;
  let fixture: ComponentFixture<Queryparam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Queryparam],
    }).compileComponents();

    fixture = TestBed.createComponent(Queryparam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
