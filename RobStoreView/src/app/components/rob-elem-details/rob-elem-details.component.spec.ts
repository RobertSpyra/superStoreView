import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobElemDetailsComponent } from './rob-elem-details.component';

describe('RobElemDetailsComponent', () => {
  let component: RobElemDetailsComponent;
  let fixture: ComponentFixture<RobElemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobElemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobElemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
