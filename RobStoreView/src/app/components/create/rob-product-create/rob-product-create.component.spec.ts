import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobProductCreateComponent } from './rob-product-create.component';

describe('RobProductCreateComponent', () => {
  let component: RobProductCreateComponent;
  let fixture: ComponentFixture<RobProductCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobProductCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobProductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
