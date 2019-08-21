import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularKnittingFabricsComponent } from './circular-knitting-fabrics.component';

describe('CircularKnittingFabricsComponent', () => {
  let component: CircularKnittingFabricsComponent;
  let fixture: ComponentFixture<CircularKnittingFabricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularKnittingFabricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularKnittingFabricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
