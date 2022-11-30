import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { UserI } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  uid: string = null;
  info: UserI = null;
  login = false;
  rol: 'conductor' | 'cliente' = null;

  constructor(private menuController: MenuController, private authService: AuthService,
              private firestore: FirestoreService, public alertController: AlertController,
              private interaction: InteractionService, private auth: AuthService,) {
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

  async editarAtributo(name: string) {
    const alert = await this.alertController.create({
      header: 'Editar'+' '+ name,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Edicion cancelada');
          },
        },
        {
          text: 'Editar',
          role: 'confirm',
          handler: (ev) => {
            console.log('Edicion eceptada ->', ev);
            this.saveAtributo(name,ev[name]);
          },
        },
      ],
      inputs: [
        {
          placeholder: 'Ingresar tu' +' '+ name,
          name,
          attributes: {
            maxlength: 80,
          },
        },
      ],
    });

    await alert.present();
  }

  async saveAtributo(name: string,input: any ){
    await this.interaction.presentLoading('Actualizando...');
    const path = 'Usuarios';
    const id = this.uid;
    const updateDoc = {
    };
    updateDoc[name] = input;
    this.firestore.updateDoc(path, id, updateDoc).then(() => {
      this.interaction.presentToast('Actualizado con éxito');
      this.interaction.closeLoading();
    });
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
