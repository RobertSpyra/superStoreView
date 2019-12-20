import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobTargetCreateComponent } from './rob-target-create.component';

describe('RobTargetCreateComponent', () => {
  let component: RobTargetCreateComponent;
  let fixture: ComponentFixture<RobTargetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobTargetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobTargetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
