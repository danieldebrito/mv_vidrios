import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/clases/login';
import { AuthService } from 'src/app/services/auth.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public islogged;
  public identity;
  public cantNoLeidos: number;

  constructor(private mensajeSrvc: MensajesService, private authSvc: AuthService ) { }

  ngOnInit(): void {
    this.islogged = this.authSvc.isLogged;
    this.identity = this.authSvc.getIdentityLocalStorage();
    this.listar();
  }

  logout() {
    this.authSvc.logout();
    this.identity = undefined;
  }

  listar() {
    this.mensajeSrvc.Listar().subscribe(response => {
      this.cantNoLeidos = response.filter( item => item.estado === 'no_leido').length;
    });
  }
}
