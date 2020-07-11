import { Component, OnInit, Input } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.css']
})
export class SideBarItemComponent implements OnInit {

  @Input() mensaje;

  public leido = false;
  public noleido = false;


  constructor() { }

  public EstadoLeido(mensaje: Mensaje) {
    if ( mensaje.estado === 'no_leido' ){
      this.leido = true;
    } else {
      this.noleido = true;
    }
  }

  ngOnInit(): void {
    this.EstadoLeido(this.mensaje);
  }

}
