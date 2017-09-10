import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassComponent } from './glass.component';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ViewContainerRef } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { GlassesService } from '../glasses.service';
import {Observable} from 'rxjs/Rx';
import { RouterTestingModule } from '@angular/router/testing';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'propertyFormat'})
class MockPipe implements PipeTransform {
    transform(value: string): string {
        return value;
    }
}

describe('GlassComponent', () => {
  let component: GlassComponent;
  let fixture: ComponentFixture<GlassComponent>;
  let authenticationService;
  let authenticationServiceStub;
  let glassesService: any;
  let glassesServiceStub: any;
  let toastsManager;
  let toastsManagerStub;
  let viewContainerRef: any;
  let viewContainerRefStub: any;

  const glass = {
          Id: 1,
          Description: 'test description',
          EuroCode: 'testEuroCode',
          OesCode: 'testOesCode',
          ModelDate: 'ModelDate',
          PartDate: 'PartDate',
          ProductType: 'ProductType',
          Modification: 'Modification',
          Tint: 'Tint',
          FittingTimeHours: 1,
          FittingType: 'FittingType',
          Height: 2,
          Width: 2,
          IsAcoustic: true,
          IsCalibration: true,
          IsAccessory: true,
          MaterialNumber: 'MaterialNumber',
          LocalCode: 'LocalCode',
          IndustryCode: 'IndustryCode',
          IsYesGlass: true,
        };

  const fakeGlass = {
        Id: 2,
        Description: 'test description'
  };

  beforeEach(async(() => {
    toastsManagerStub = {
        setRootViewContainerRef: function (vcr: ViewContainerRef){},
        success: function (msg: string, result: string){},
        error: function (msg: string, result: string){}
    };

    authenticationServiceStub =  {
        isLoggedIn: true,
        isAdminLoggedIn: false
    };

    glassesServiceStub =  {
        getGlassById: function(id: number){ return Observable.of(glass); },
        buyGlass: function(id: number){ return Observable.of(glass); }
    };

    viewContainerRefStub = {};

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ GlassComponent, MockPipe ],
      providers:    [ {provide: AuthenticationService, useValue: authenticationServiceStub },
                      {provide: ToastsManager, useValue: toastsManagerStub },
                      {provide: ViewContainerRef, useValue: viewContainerRefStub},
                      {provide: GlassesService, useValue: glassesServiceStub},
                    ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authenticationService = TestBed.get(AuthenticationService);
    toastsManager = TestBed.get(ToastsManager);
    viewContainerRef = TestBed.get(ViewContainerRef);
    glassesService = TestBed.get(GlassesService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit and set the glass', () => {
    const spy = spyOn(glassesService, 'getGlassById').and.returnValue(Observable.of(glass));

    component.ngOnInit();
    fixture.detectChanges();

    expect(spy.calls.count()).toBe(1, 'getById called');
    expect(component.glass === glass).toBe(true);
    expect(component.glass === fakeGlass).toBe(false);
  });

  it('should call buyGlass and toastr.success', () => {
    const spy1 = spyOn(toastsManager, 'success');
    const spy2 = spyOn(glassesService, 'buyGlass').and.returnValue(Observable.of(glass));

    component.buyGlass();
    fixture.detectChanges();

    expect(spy1.calls.count()).toBe(1, 'toastsManager.success was called once');
    expect(spy1).toHaveBeenCalledWith('You have bought product (test description)', 'SUCCESS');
    expect(spy2.calls.count()).toBe(1, 'buyGlass was called once');
  });
});
