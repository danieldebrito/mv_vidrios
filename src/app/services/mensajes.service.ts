import { Injectable } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { Observable } from 'rxjs';
import { BaseHTTPService } from 'src/app/services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor( private miHttp: BaseHTTPService) { }

  public Listar(): Observable<Mensaje[]> {
    return this.miHttp.httpGetO<Mensaje[]>('/mensajes/');
  }

  public Baja(id: number): Promise<object> {
    return this.miHttp.httpDeleteP('/mensajes/' + '"' + id + '"');
  }

  public TraerUno(id: string): Observable<Mensaje> {
    return this.miHttp.httpGetO<Mensaje>('/mensajes/' + id);
  }

  public Alta(
    fecha: string,
    nombre: string,
    email: string,
    telefono: string,
    mensaje: string,
    estado: string
  ): Promise<object> {
    const request: object = {
    fecha,
    nombre,
    email,
    telefono,
    mensaje,
    estado
    };
    return this.miHttp.httpPostP('/mensajes/', request);
  }

  public Update(
    idMensaje: number,
    fecha: string,
    nombre: string,
    email: string,
    telefono: string,
    mensaje: string,
    estado: string
    ): Promise<object> {
    const request: object = {
      idMensaje,
      fecha,
      nombre,
      email,
      telefono,
      mensaje,
      estado
    };
    return this.miHttp.httpPostP('/mensajes/update', request);
  }

  getfecha() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString();
    const mes = (fechaActual.getMonth() + 1).toString();
    const anio = fechaActual.getFullYear().toString();
    const hora = fechaActual.getHours().toString();
    const minutos = fechaActual.getMinutes().toString();
    const segundos = fechaActual.getSeconds().toString();

    const fecha = dia + '/' + mes + '/' + anio;
    const horario = hora + ':' + minutos + ':' + segundos;

    const ret = fecha + ' - ' + horario ;

    return ret;
    // return fechaActual;
  }
}
