import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobTargetElementComponent } from './rob-target-element.component';

describe('RobTargetElementComponent', () => {
  let component: RobTargetElementComponent;
  let fixture: ComponentFixture<RobTargetElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobTargetElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobTargetElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
