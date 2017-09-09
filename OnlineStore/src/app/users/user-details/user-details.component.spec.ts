// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { UserDetailsComponent } from './user-details.component';
// import { UsersService } from '../users.service';
// import { Observable } from "rxjs/Rx";

// describe('UserDetailsComponent', () => {
//   let component: UserDetailsComponent;
//   let fixture: ComponentFixture<UserDetailsComponent>;
//   let usersServiceStub: any;
//   let usersService: UsersService;

//   beforeEach(
//     async(() => {
//         usersServiceStub = {
//             changePassword(oldPassword: string,
//                           newPassword: string,
//                           confirmPassword: string): Observable<any> {
//                 // return new o
//               };
//     };

//     TestBed.configureTestingModule({
//       declarations: [ UserDetailsComponent ],
//       providers:    [ {provide: UsersService, useValue: usersServiceStub } ]
//     });
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     usersService = TestBed.get(UsersService);
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
