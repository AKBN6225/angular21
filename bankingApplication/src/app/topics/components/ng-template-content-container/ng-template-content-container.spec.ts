import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateContentContainer } from './ng-template-content-container';

describe('NgTemplateContentContainer', () => {
  let component: NgTemplateContentContainer;
  let fixture: ComponentFixture<NgTemplateContentContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateContentContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(NgTemplateContentContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
