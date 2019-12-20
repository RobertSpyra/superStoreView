import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobModalUpdateComponent } from './rob-modal-update.component';

describe('RobModalUpdateComponent', () => {
  let component: RobModalUpdateComponent;
  let fixture: ComponentFixture<RobModalUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobModalUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobModalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
