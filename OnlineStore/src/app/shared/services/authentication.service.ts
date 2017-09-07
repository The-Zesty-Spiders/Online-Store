import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Injectable, OnInit, ViewContainerRef} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

const BASE_URL = 'http://gggonlineshop.apphb.com/';
@Injectable()
export class AuthenticationService {
  public token: string;
  public username: string;
  public isLoggedIn: boolean;
  public isAdminLoggedIn: boolean;
  public user: string;
  public err: Response;
  constructor(private http: Http,  public router: Router) {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.username = currentUser && currentUser.username;
    if (this.token) {
      this.isLoggedIn = true;
      if (this.username === 'admin@admin.com') {
        this.isAdminLoggedIn = true;
      }
    } else {
      this.isLoggedIn = false;
      this.isAdminLoggedIn = false;
    }
  }
  login(username: string, password: string): Observable<any> {
    const headers = new Headers({'Content-type': 'plain/text'});
    const options = new RequestOptions({headers: headers});
    const url = `${BASE_URL}/token`;
    const body = `Username=${username}&Password=${password}&grant_type=password`;

    return this.http.post(url, body)
        .map((response: Response) => {
          const token = response.json() && response.json().access_token;

          if (token) {
            this.token = token;
            this.username = username;
            localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

            if (username === 'admin@admin.com') {
              this.isAdminLoggedIn = true;
            }
            this.isLoggedIn = true;
            return response;
          }
        })
        .catch((err) => {
            return err;
        });
  }

  logout(): void {
    if (this.isLoggedIn) {
      this.token = null;
      this.isLoggedIn = false;
      this.isAdminLoggedIn = false;
      localStorage.removeItem('currentUser');
      this.router.navigate(['/']);
      return;

    }
    return;
  }
}
