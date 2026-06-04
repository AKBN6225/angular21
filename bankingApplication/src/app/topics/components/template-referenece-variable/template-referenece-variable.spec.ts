import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefereneceVariable } from './template-referenece-variable';

describe('TemplateRefereneceVariable', () => {
  let component: TemplateRefereneceVariable;
  let fixture: ComponentFixture<TemplateRefereneceVariable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRefereneceVariable],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateRefereneceVariable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
