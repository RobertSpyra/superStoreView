import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobTargetListComponent } from './rob-target-list.component';

describe('RobTargetListComponent', () => {
  let component: RobTargetListComponent;
  let fixture: ComponentFixture<RobTargetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobTargetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobTargetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
