import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routeparameters } from './routeparameters';

describe('Routeparameters', () => {
  let component: Routeparameters;
  let fixture: ComponentFixture<Routeparameters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Routeparameters],
    }).compileComponents();

    fixture = TestBed.createComponent(Routeparameters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
