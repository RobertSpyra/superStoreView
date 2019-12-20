import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobElementHistoryComponent } from './rob-element-history.component';

describe('RobElementHistoryComponent', () => {
  let component: RobElementHistoryComponent;
  let fixture: ComponentFixture<RobElementHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobElementHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobElementHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
