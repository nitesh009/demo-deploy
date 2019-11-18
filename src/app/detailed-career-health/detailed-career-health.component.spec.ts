import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCareerHealthComponent } from './detailed-career-health.component';

describe('DetailedCareerHealthComponent', () => {
  let component: DetailedCareerHealthComponent;
  let fixture: ComponentFixture<DetailedCareerHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedCareerHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCareerHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
