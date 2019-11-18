import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedEducationalHealthComponent } from './detailed-educational-health.component';

describe('DetailedEducationalHealthComponent', () => {
  let component: DetailedEducationalHealthComponent;
  let fixture: ComponentFixture<DetailedEducationalHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedEducationalHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedEducationalHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
