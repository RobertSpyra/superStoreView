import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobTableComponent } from './rob-table.component';

describe('RobTableComponent', () => {
  let component: RobTableComponent;
  let fixture: ComponentFixture<RobTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
