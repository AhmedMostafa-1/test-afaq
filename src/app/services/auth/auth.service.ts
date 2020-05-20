import { Injectable, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router:Router,
    private http:HttpClient
    ) { }
    _loginUrl = 'http://devmode.fv.academy/api/auth/login';
  _registerUrl = 'http://devmode.fv.academy/api/auth/register';
  errorsHandler = new ErrorHandler();

  registerUser(registrationInfo): Observable<void> {
    return this.http.post<void>(this._registerUrl, registrationInfo);
  }
  login(user: any): Observable<any> {
    try {
      return this.http.post<any>(this._loginUrl, user);
    } catch (err) {
      this.errorsHandler.handleError(err);
    }
  }
    getToken() {
    return localStorage.getItem("token");
  }
}
