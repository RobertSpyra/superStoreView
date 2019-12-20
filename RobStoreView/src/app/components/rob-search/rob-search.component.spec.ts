import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobSearchComponent } from './rob-search.component';

describe('RobSearchComponent', () => {
  let component: RobSearchComponent;
  let fixture: ComponentFixture<RobSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
