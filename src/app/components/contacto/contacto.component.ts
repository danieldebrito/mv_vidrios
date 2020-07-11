import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactForm = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    mensaje: new FormControl(''),
  });

  constructor(private router: Router, private mensajeSrvc: MensajesService) { }

  public altaMensaje() {

    const { nombre, email, telefono, mensaje } = this.contactForm.value;

    this.mensajeSrvc.Alta( nombre, email, telefono, mensaje, 'no_leido')
    .then(
      response => {
        this.router.navigate(['gracias']);  //  redirecciona
      }
    )
      .catch(
        error => {
          console.error('ERROR DEL SERVIDOR', error);
        }
      );
  }


  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
