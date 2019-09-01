import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsuccessPage } from './alertsuccess.page';

describe('AlertsuccessPage', () => {
  let component: AlertsuccessPage;
  let fixture: ComponentFixture<AlertsuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsuccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
