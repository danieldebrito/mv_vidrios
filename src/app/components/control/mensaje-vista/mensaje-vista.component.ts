import { Component, OnInit, Input } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';

@Component({
  selector: 'app-mensaje-vista',
  templateUrl: './mensaje-vista.component.html',
  styleUrls: ['./mensaje-vista.component.css']
})
export class MensajeVistaComponent implements OnInit {

  @Input() mensaje: Mensaje = {};

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
