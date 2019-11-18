import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedGeneralHealthComponent } from './detailed-general-health.component';

describe('DetailedGeneralHealthComponent', () => {
  let component: DetailedGeneralHealthComponent;
  let fixture: ComponentFixture<DetailedGeneralHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedGeneralHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedGeneralHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
