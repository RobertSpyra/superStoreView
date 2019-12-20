import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobTargetDetailsComponent } from './rob-target-details.component';

describe('RobTargetDetailsComponent', () => {
  let component: RobTargetDetailsComponent;
  let fixture: ComponentFixture<RobTargetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobTargetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobTargetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
