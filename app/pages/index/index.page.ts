import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  slides = [
    {
      img: 'assets/usuario.svg',
      titulo: '<b>Bienvenido<br>Ingresa a la aplicacion para continuar'
    },
    {
      img: 'assets/maps.svg',
      titulo: '<b>Selecciona destino<br>facil y rapido'
    },
    {
      img: 'assets/viaje.svg',
      titulo: '<b>Ve al lugar de encuentro<br>y viaja seguro'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
