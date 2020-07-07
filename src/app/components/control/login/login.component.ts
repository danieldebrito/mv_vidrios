import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

  public loguear() {
    const { email, password } = this.loginForm.value;
    try {
      const user = true; /* = await this.authSvc.login(email, password); */
      if (user) {
        this.routes.navigate(['/cpanel']);
      } else {
        this.routes.navigate(['/errorLogin']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
