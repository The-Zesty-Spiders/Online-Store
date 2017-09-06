import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrdersDetailsComponent } from './user-orders-details.component';

describe('UserOrdersDetailsComponent', () => {
  let component: UserOrdersDetailsComponent;
  let fixture: ComponentFixture<UserOrdersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrdersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrdersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
