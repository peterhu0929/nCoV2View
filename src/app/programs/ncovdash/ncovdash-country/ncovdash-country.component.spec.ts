import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcovdashCountryComponent } from './ncovdash-country.component';

describe('NcovdashCountryComponent', () => {
  let component: NcovdashCountryComponent;
  let fixture: ComponentFixture<NcovdashCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcovdashCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcovdashCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
