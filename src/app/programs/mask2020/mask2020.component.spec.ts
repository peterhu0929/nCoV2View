import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mask2020Component } from './mask2020.component';

describe('Mask2020Component', () => {
  let component: Mask2020Component;
  let fixture: ComponentFixture<Mask2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mask2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mask2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
