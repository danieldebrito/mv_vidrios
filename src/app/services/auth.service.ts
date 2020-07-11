import { Injectable } from '@angular/core';
import { Login } from 'src/app/clases/login';
import { BaseHTTPService } from 'src/app/services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public identity: Login;

  constructor(public miHttp: BaseHTTPService) { }

  Loguear(dataLogin: Login) {
    const request: JSON = JSON.parse(JSON.stringify(dataLogin));

    return this.miHttp.httpPostP('/user/login', request);
  }
}
