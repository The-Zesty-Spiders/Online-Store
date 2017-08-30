import 'rxjs/add/operator/map';

import {Headers, Http, RequestOptions, Response} from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  public token: string;
  public isLoggedIn: boolean;
  constructor(private http: Http) {
  // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    if (this.token) {
      this.isLoggedIn = true;
    }
  }

  login(username: string, password: string): Observable<boolean> {

    const headers = new Headers({'Content-type': 'text/plain'});
    headers.append('Access-Control-Allow-Origin', '*');
    const options = new RequestOptions({headers: headers});

    return this.http.post('http://gggonlineshop.apphb.com/token', `Username=${username}&Password=${password}&grant_type=password`)
      .map((response: Response) => {
        // console.log(response.json().userName);
        // login successful if there's a jwt token in the response
        const token = response.json() && response.json().access_token;
        // console.log(token);
        if (token) {
          // set token property
          this.token = token;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          this.isLoggedIn = true;
          // return true to indicate successful login
          // console.log('LOGIN SUCCESS');
          return true;
        } else {
            // return false to indicate failed login
            // console.log('LOGIN FAILED');
            return false;
        }
      });
  }

  logout(): void {
    console.log('LOG OUT CLICKED!');
  // clear token remove user from local storage to log user out
    this.token = null;
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
  }
}

