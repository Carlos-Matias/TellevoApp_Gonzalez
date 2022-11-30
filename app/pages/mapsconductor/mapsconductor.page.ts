import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';

declare let google: any;

@Component({
  selector: 'app-mapsconductor',
  templateUrl: './mapsconductor.page.html',
  styleUrls: ['./mapsconductor.page.scss'],
})
export class MapsconductorPage implements OnInit {

  map: any;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [
    {
      title: 'Duoc uc Maipu',
      latitud: '-33.511819',
      longitud: '-70.752503'
    },
    {
      title: 'CRS Maipú',
      latitud: '-33.511179',
      longitud: '-70.765442'
    }
  ];

  constructor(private menuController: MenuController) {}

  ionViewDidEnter(){
    this.showMap();
  }

  addMarkersToMap(markers){
    for (const marker of markers){
      const position = new google.maps.LatLng(marker.latitud, marker.longitud);
      const mapMarker = new google.maps.Marker({
        position,
        title: marker.title,
        latitude: marker.latitud,
        longitude: marker.longitud
      });
      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    const infoWindowContent = '<div id="content">' +
                            '<h2 id="firstHeding" class="firstHeding">'+ marker.title +'</h2>' +
                            '<p> Latitud: ' + marker.latitude + '</p>' +
                            '<p> Longitud: ' + marker.longitude + '</p>' +
                            '</div>';

   const infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent
   });

   marker.addListener('click',() => {
    this.closeAllInfoWindow();
    infoWindow.open(this.map, marker);
   });
   this.infoWindows.push(infoWindow);

  }

  closeAllInfoWindow(){
    for(const window of this.infoWindows){
      window.close();
    }
  }

  showMap(){
    const location = new google.maps.LatLng(-33.511819,-70.752503);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  ngOnInit() {
  }


}
