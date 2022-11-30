import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserI } from './models/models';
import { AuthService } from './services/auth.service';
import { FirestoreService } from './services/firestore.service';
import { InteractionService } from './services/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  login = false;
  rol: 'conductor' | 'cliente' = null;


  constructor(private menu: MenuController, private auth: AuthService,
              private interaction: InteractionService, private router: Router,
              private firestore: FirestoreService) {
  this.auth.stateUser().subscribe(res =>{
    if(res){
      this.login = true;
      this.getDatosUser(res.uid);
    }else{
      this.login = false;
    }
  });
}

  logout(){
    this.auth.logout();
    this.interaction.presentToast('Sesión Finalizada');
    this.router.navigate(['/index']);
  }

  getDatosUser(uid: string){
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<UserI>(path, id).subscribe(res =>{
      if(res){
        this.rol = res.perfil;
      }
    });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
