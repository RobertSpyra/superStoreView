import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobListComponent } from './rob-list.component';

describe('RobListComponent', () => {
  let component: RobListComponent;
  let fixture: ComponentFixture<RobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
