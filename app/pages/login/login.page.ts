import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { InteractionService } from 'src/app/services/interaction.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credenciales = {
    correo: null,
    password: null
  };

  constructor(private menuController: MenuController, private auth: AuthService, private router: Router,
              private interaction: InteractionService) {}

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async login() {
    await this.interaction.presentLoading('Ingresando...');
    console.log('credenciales->', this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch(error =>{
      console.log('error');
      this.interaction.closeLoading();
      this.interaction.presentToast('Usuario o contraseña invalido');
    });
    if(res) {
      console.log('res->', res);
      this.interaction.closeLoading();
      this.interaction.presentToast('Ingreso exitoso');
      this.router.navigate(['/conductorhome']);
    }
  }

}
