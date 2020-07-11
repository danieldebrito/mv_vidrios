import { Component, OnInit, Input } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/clases/mensaje';

@Component({
  selector: 'app-contac-board',
  templateUrl: './contac-board.component.html',
  styleUrls: ['./contac-board.component.css']
})
export class ContacBoardComponent implements OnInit {

  @Input() mensaje: Mensaje;

  public mensajes: Mensaje[] = [];

  constructor( private mensajeSrvc: MensajesService) { }

  listar() {
    this.mensajeSrvc.Listar().subscribe(response => {
      this.mensajes = response;
    });
  }

  eliminar(id: number) {
    this.mensajeSrvc.Baja(id).then( () => {
      this.listar();
    });
  }

  public updateMensaje() {
    const { nombre, email, telefono, mensaje } = this.mensaje;
    console.log({ nombre, email, telefono, mensaje });
    /*
    this.mensajeSrvc.Update( this.mensaje.idMensaje, nombre, email, telefono, mensaje, 'no_leido')
    .then(
      response => {
      }
    )
      .catch(
        error => {
          console.error('ERROR DEL SERVIDOR', error);
        }
      );*/
  }

  ngOnInit(): void {
  }

}
