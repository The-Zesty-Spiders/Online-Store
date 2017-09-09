// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { NavComponent } from './nav.component';
// import { AuthenticationService } from '../services/authentication.service';
// import { ToastsManager } from 'ng2-toastr/src/toast-manager';
// import { ViewContainerRef } from '@angular/core';

// describe('NavComponent', () => {
//   let component: NavComponent;
//   let fixture: ComponentFixture<NavComponent>;
//   let authenticationService;
//   let authenticationServiceStub;
//   let toastsManager;
//   let toastsManagerStub;
//   let viewContainerRef;
//   let viewContainerRefStub;

//   beforeEach(async(() => {
//     toastsManagerStub = {
//         setRootViewContainerRef: function (vcr: ViewContainerRef){}
//     };

//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       declarations: [ NavComponent ],
//       providers:    [ {provide: AuthenticationService, useValue: authenticationServiceStub },
//                       {provide: ToastsManager, useValue: toastsManagerStub },
//                       {provide: ViewContainerRef, useValue: viewContainerRefStub },
//                     ]
//     });
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(NavComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     authenticationService = TestBed.get(AuthenticationService);
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
