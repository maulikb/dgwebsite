import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParakashYarnComponent } from './parakash-yarn.component';

describe('ParakashYarnComponent', () => {
  let component: ParakashYarnComponent;
  let fixture: ComponentFixture<ParakashYarnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParakashYarnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParakashYarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
