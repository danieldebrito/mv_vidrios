import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje-vista',
  templateUrl: './mensaje-vista.component.html',
  styleUrls: ['./mensaje-vista.component.css']
})
export class MensajeVistaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
