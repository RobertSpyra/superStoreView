import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobElementComponent } from './rob-element.component';

describe('RobElementComponent', () => {
  let component: RobElementComponent;
  let fixture: ComponentFixture<RobElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
