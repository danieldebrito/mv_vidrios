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
    nombre: string,
    email: string,
    telefono: string,
    mensaje: string,
    estado: string
  ): Promise<object> {
    const request: object = {
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
    nombre: string,
    email: string,
    telefono: string,
    mensaje: string,
    estado: string
    ): Promise<object> {
    const request: object = {
      idMensaje,
      nombre,
      email,
      telefono,
      mensaje,
      estado
    };
    return this.miHttp.httpPostP('/mensajes/update', request);
  }
}
