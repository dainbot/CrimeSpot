import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeReportPage } from './crime-report.page';

describe('CrimeReportPage', () => {
  let component: CrimeReportPage;
  let fixture: ComponentFixture<CrimeReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
