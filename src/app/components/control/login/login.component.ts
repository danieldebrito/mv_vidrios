import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private routes: Router, private authSvc: AuthService ) { }

  ngOnInit(): void { }

  public async loguear() {

    // const { userName, pass } = this.loginForm.value;
    // console.log(this.loginForm.value);

    try {
      const logeo = await this.authSvc.Loguear(this.loginForm.value);
      if (logeo) {
        this.authSvc.isLogged = true;
        this.routes.navigate(['/cpanel']);
      } else {
        this.routes.navigate(['/errorLogin']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
