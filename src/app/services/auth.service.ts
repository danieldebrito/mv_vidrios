import { Injectable } from '@angular/core';
import { Login } from 'src/app/clases/login';
import { BaseHTTPService } from 'src/app/services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = false;
  public identity;

  constructor(public miHttp: BaseHTTPService) { }

  Loguear(dataLogin: Login) {
    const request: JSON = JSON.parse(JSON.stringify(dataLogin));
    this.setIdentityLocalStorage(dataLogin);
    return this.miHttp.httpPostP('/user/login', request);
  }

  setIdentityLocalStorage(login: Login) {
    login.password = '';
    localStorage.setItem('identity', JSON.stringify(login));
  }

  getIdentityLocalStorage() {
    const identityLS = JSON.parse(localStorage.getItem('identity'));
    if (identityLS !== undefined || identityLS !== null) {
      this.identity = identityLS;
    } else {
      this.identity = undefined;
    }
    return this.identity;
  }

  isLogued(): boolean {
    return (this.identity !== undefined || this.identity !== null) ? true : false;
  }

  public logout() {
    localStorage.clear();
  }
}
