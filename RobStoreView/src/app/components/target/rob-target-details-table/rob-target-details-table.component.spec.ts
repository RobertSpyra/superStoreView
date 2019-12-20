import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobTargetDetailsTableComponent } from './rob-target-details-table.component';

describe('RobTargetDetailsTableComponent', () => {
  let component: RobTargetDetailsTableComponent;
  let fixture: ComponentFixture<RobTargetDetailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobTargetDetailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobTargetDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
