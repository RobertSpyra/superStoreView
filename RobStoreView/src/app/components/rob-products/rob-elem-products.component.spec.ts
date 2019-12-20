import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobElemProductsComponent } from './rob-elem-products.component';

describe('RobElemProductsComponent', () => {
  let component: RobElemProductsComponent;
  let fixture: ComponentFixture<RobElemProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobElemProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobElemProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
