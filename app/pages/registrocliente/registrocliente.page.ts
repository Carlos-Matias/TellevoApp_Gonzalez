import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserI } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-registrocliente',
  templateUrl: './registrocliente.page.html',
  styleUrls: ['./registrocliente.page.scss'],
})
export class RegistroclientePage implements OnInit {

  datos: UserI = {
    correo: null,
    password: null,
    modelo: null,
    patente: null,
    carrera: null,
    uid: null,
    perfil: 'cliente'
    };

  constructor(private menuController: MenuController, private auth: AuthService,
    private firestore: FirestoreService, private interaction: InteractionService,
    private reuter: Router) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async registro(){
    await this.interaction.presentLoading('registrando...');
    console.log('datos ->', this.datos);
    const res = await this.auth.registraUser(this.datos).catch(error =>{
      this.interaction.closeLoading();
      this.interaction.presentToast('Error al ingresar los datos');
      console.log('error');
    });
    if(res){
      console.log('exito al crear usuario');
      const path = 'Usuarios';
      const id = res.user.uid;
      this.datos.uid = id;
      this.datos.password = null;
      await this.firestore.createDoc(this.datos, path, id);
      this.interaction.closeLoading();
      this.interaction.presentToast('Registrado con exito');
      this.reuter.navigate(['/index']);
    }
  }
}
