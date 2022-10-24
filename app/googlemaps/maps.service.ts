import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  apiKey = environment.apiKeyGooglemaps;
  mapsLoaded = false;

  constructor() {}

  init(render: any, document: any): Promise<any>{
    return new Promise((resolve, reject) => { 

      if(this.mapsLoaded){
        console.log('Googlo maps esta cargando');
        resolve(true);
        return;
      }

      const script = render.createElement('script');
      script.id = 'googleMaps';

      window['mapInit'] = () => {
        this.mapsLoaded = true;
        if (google) {
          console.log();
        }
      }

   })
  }
}
