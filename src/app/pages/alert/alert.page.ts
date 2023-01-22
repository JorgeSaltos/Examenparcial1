import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertControl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertControl.create({
      header: 'Please enter your info',
      buttons: ['OK', 'CANCELAR'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Apellido',
        },
        {
          placeholder: 'Descripcion Materia',
        },
        {
          type: 'url',
          placeholder: 'https:// ionicframework.com ',
        },
       
        {
          type: 'date',
          
        },
        {
          type: 'password',
          placeholder: 'Clave',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        
      ],
    });

    await alert.present();
  }
}



