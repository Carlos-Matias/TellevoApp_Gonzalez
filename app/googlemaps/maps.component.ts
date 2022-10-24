import { Component, OnInit, Input, Renderer2, ElementRef, Inject, ViewChild } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { DOCUMENT } from '@angular/common';
import { MapsService } from './maps.service';
import { ModalController } from '@ionic/angular';

const { Geolocation } = Plugins;
declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {

  //cordenadas
  @Input() position = {
    lat: -2.898116,
    lng: -78.99958149999999
  };

  label = {
    titulo: 'Ubicacion',
    subtitulo: 'Ubicacion del viaje'
  }

  map: any;
  marker: any;
  infowindow: any;
  positionSet: any;

  @ViewChild('map') divMap: ElementRef;

  constructor() { }

  ngOnInit() {}

}
