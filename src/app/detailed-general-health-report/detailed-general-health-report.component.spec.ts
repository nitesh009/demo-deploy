import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedGeneralHealthReportComponent } from './detailed-general-health-report.component';

describe('DetailedGeneralHealthReportComponent', () => {
  let component: DetailedGeneralHealthReportComponent;
  let fixture: ComponentFixture<DetailedGeneralHealthReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedGeneralHealthReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedGeneralHealthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
