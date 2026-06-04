import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowStatements } from './control-flow-statements';

describe('ControlFlowStatements', () => {
  let component: ControlFlowStatements;
  let fixture: ComponentFixture<ControlFlowStatements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowStatements],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlFlowStatements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
