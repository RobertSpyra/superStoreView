import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobStartComponent } from './rob-start.component';

describe('RobStartComponent', () => {
  let component: RobStartComponent;
  let fixture: ComponentFixture<RobStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
