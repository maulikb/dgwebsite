import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParakashPolyesterComponent } from './parakash-polyester.component';

describe('ParakashPolyesterComponent', () => {
  let component: ParakashPolyesterComponent;
  let fixture: ComponentFixture<ParakashPolyesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParakashPolyesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParakashPolyesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
