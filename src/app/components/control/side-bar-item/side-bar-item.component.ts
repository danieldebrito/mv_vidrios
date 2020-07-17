import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/clases/mensaje';
@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.css']
})
export class SideBarItemComponent implements OnInit {

  @Input() mensaje: Mensaje = {};
  @Output() pasarMensaje = new EventEmitter();
  @Output() cerrarMenu = new EventEmitter();
  @Output() borrarItem = new EventEmitter();


  public leido = false;
  public noleido = false;

  constructor(private mensajeSrvc: MensajesService) { }

  public EstadoLeidoNoLeido(mensaje: Mensaje) {
    if (mensaje.estado === 'no_leido') {
      this.leido = true;
    } else {
      this.noleido = true;
    }
  }

  lanzarMensaje(event) {
    this.pasarMensaje.emit({ mensaje: this.mensaje });
    this.lanzarcerrarMenu();
  }

  lanzarcerrarMenu() {
    this.cerrarMenu.emit();
  }

  lanzarBorrar(event) {
    this.borrarItem.emit({ id: this.mensaje.idMensaje });
  }

  public updateMensajeLeido() {
    const { idMensaje, fecha, nombre, email, telefono, mensaje, estado } = this.mensaje;

    this.mensajeSrvc.Update(
      idMensaje, fecha, nombre, email, telefono, mensaje, 'leido').then(
        response => {
          // this.listar();
          this.leido = true;
        }
      )
      .catch(
        error => {
          console.error('ERROR DEL SERVIDOR', error);
        }
      );
  }

  ngOnInit(): void {
    this.EstadoLeidoNoLeido(this.mensaje);
  }

}
