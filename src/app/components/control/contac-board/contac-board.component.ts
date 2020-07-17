import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/clases/mensaje';

@Component({
  selector: 'app-contac-board',
  templateUrl: './contac-board.component.html',
  styleUrls: ['./contac-board.component.css']
})
export class ContacBoardComponent implements OnInit {

  public mensajes: Mensaje[] = [];
  public mensajeMostrar: Mensaje = {};

  constructor(private mensajeSrvc: MensajesService) { }

  public openNav() {
    document.getElementById('mySidenav').style.width = '350px';
    document.getElementById('main').style.marginLeft = '350px';
    this.listar();
  }

  public closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    this.listar();
  }

  listar() {
    this.mensajeSrvc.Listar().subscribe(response => {
      this.mensajes = response;
      return response;
    });
  }

  iniciarMensajero() {
    this.mensajeSrvc.Listar().subscribe(response => {
      this.mensajeMostrar = response[0];
    });
  }

  eliminar(event) {
    this.mensajeSrvc.Baja(event.id).then(() => {
      this.listar();
    });
  }

  public updateMensajeLeido() {
    const { idMensaje, fecha, nombre, email, telefono, mensaje, estado } = this.mensajeMostrar;

    this.mensajeSrvc.Update(
      idMensaje, fecha, nombre, email, telefono, mensaje, 'leido').then(
        response => {
          this.listar();
        }
      )
      .catch(
        error => {
          console.error('ERROR DEL SERVIDOR', error);
        }
      );
  }

  public showMensaje(event) {
    this.mensajeMostrar = event.mensaje;
  }

  ngOnInit(): void {
    this.listar();
    this.iniciarMensajero();
  }
}
