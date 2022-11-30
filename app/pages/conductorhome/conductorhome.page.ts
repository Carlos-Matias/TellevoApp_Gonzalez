import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { UserI } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-conductorhome',
  templateUrl: './conductorhome.page.html',
  styleUrls: ['./conductorhome.page.scss'],
})
export class ConductorhomePage implements OnInit {

  uid: string = null;
  info: UserI = null;
  login = false;
  ubicacion = null;
  rol: 'conductor' | 'cliente' = null;

  slides = [
    {
      img: 'assets/usuario.svg',
      titulo: '<b>Bienvenido<br>'
    },
    {
      img: 'assets/maps.svg',
      titulo: '<b>Gracias por preferir<br>TeLlevo app'
    },
    {
      img: 'assets/viaje.svg',
      titulo: '<b>Ve al lugar de encuentro<br>y siempre se prudente al conducir'
    }
  ];

  constructor(private menuController: MenuController, private authService: AuthService,
              private firestore: FirestoreService, public alertController: AlertController,
              private auth: AuthService,) {
                this.auth.stateUser().subscribe(res =>{
                  if(res){
                    this.login = true;
                    this.getDatosUser(res.uid);
                  }else{
                    this.login = false;
                  }
                });
              }

  async ngOnInit() {
    this.authService.stateUser().subscribe(res =>{
      this.getuid();
    });
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

  async getuid(){
    const uid = await this.authService.getUid();
    if(uid){
      this.uid = uid;
      this.getInfoUser();
    }else{
      console.log('no existe uid');
    }
  }

  getInfoUser(){
    const path = 'Usuarios';
    const id = this.uid;
    this.firestore.getDoc<UserI>(path, id).subscribe(res =>{
      if(res){
        this.info = res;
      }
    });
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
