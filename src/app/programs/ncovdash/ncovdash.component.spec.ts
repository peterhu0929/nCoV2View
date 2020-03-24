
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcovdashComponent } from './ncovdash.component';

describe('NcovdashComponent', () => {
  let component: NcovdashComponent;
  let fixture: ComponentFixture<NcovdashComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NcovdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcovdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
