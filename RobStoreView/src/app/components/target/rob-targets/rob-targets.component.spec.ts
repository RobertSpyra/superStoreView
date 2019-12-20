import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobTargetsComponent } from './rob-targets.component';

describe('RobTargetsComponent', () => {
  let component: RobTargetsComponent;
  let fixture: ComponentFixture<RobTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
