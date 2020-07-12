import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Mensaje } from 'src/app/clases/mensaje';

@Component({
  selector: 'app-mensaje-vista',
  templateUrl: './mensaje-vista.component.html',
  styleUrls: ['./mensaje-vista.component.css']
})
export class MensajeVistaComponent implements OnInit {

  @Input() mensaje: Mensaje = {};

  contactForm = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    mensaje: new FormControl(''),
  });

  constructor() { }

  public mostrarMensaje(){
    console.log(this.mensaje);
    // const { nombre, email, telefono, mensaje } = 

   // this.contactForm.value = { this.mensaje.nombre, email, telefono, mensaje};

  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
