import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from './nav.component';
import { AuthenticationService } from '../services/authentication.service';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ViewContainerRef } from '@angular/core';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let authenticationService;
  let authenticationServiceStub;
  let toastsManager;
  let toastsManagerStub;
  let viewContainerRef: any;
  let viewContainerRefStub: any;

  beforeEach(async(() => {
    toastsManagerStub = {
        setRootViewContainerRef: function (vcr: ViewContainerRef){},
        success: function (msg: string, result: string){},
        error: function (msg: string, result: string){}
    };

    authenticationServiceStub =  {
        isLoggedIn: false,
        isAdminLoggedIn: false,
        logout: function(){}
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ NavComponent ],
      providers:    [ {provide: AuthenticationService, useValue: authenticationServiceStub },
                      {provide: ToastsManager, useValue: toastsManagerStub },
                      {provide: ViewContainerRef, useValue: viewContainerRefStub },
                    ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authenticationService = TestBed.get(AuthenticationService);
    toastsManager = TestBed.get(ToastsManager);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('logout should call toastr.success and authServices.logout', () => {
    const spy1 = spyOn(authenticationService, 'logout');
    const spy2 = spyOn(toastsManager, 'success');
    const spy3 = spyOn(toastsManager, 'error');

    component.logout();
    fixture.detectChanges();

    expect(spy1.calls.count()).toBe(1, 'toastr.success was called once');
    expect(spy2.calls.count()).toBe(1, 'authServices.logout was called once');
    expect(spy3.calls.count()).toBe(0);
  });

  it('should not call toastr.success and authServices.logout when no logout()', () => {
    const spy1 = spyOn(authenticationService, 'logout');
    const spy2 = spyOn(toastsManager, 'success');
    const spy3 = spyOn(toastsManager, 'error');

    fixture.detectChanges();

    expect(spy1.calls.count()).toBe(0, 'toastr.success was called once');
    expect(spy2.calls.count()).toBe(0, 'authServices.logout was called once');
    expect(spy3.calls.count()).toBe(0);
  });

  it('ngOnInit should set isLoggedIn and isAdminLoggedIn Correctly', () => {
    component.ngOnInit();

    expect(component.isAdminLoggedIn).toBe(false);
    expect(component.isLoggedIn).toBe(false);
  });
});
