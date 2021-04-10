import { Component } from '@angular/core';
import { ToDoListModel } from '../models/toDoList';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AppService } from '../services/appService/app.service';
import { UsuarioModel } from '../models/usuarios';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  toDoList: ToDoListModel = new ToDoListModel();
  usuario: UsuarioModel = new UsuarioModel();
  users:any[]=[];
    idU: any;

    public listTasks: any;
    printContacts: any;
    dataTasks: any;
    description: string;
  

  constructor(private alertController: AlertController, private appService: AppService) {
    //this.getId(this.usuario._id);
    this.listTasks = [];
  }
   getId( idUs: string){
      this.idU = idUs;
      console.log(this.idU);
   }

  async addToDoL(forma:NgForm){
      //localStorage.setItem('infoToDo', JSON.stringify(this.toDoList));
      let description = this.toDoList.description;
      let newTask = {
        "description": description
      };
  
        //PUSH
      this.listTasks.push(newTask);
      this.dataTasks = this.listTasks; 
      console.log(this.dataTasks);
    }

    async delete(i) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Eliminar tarea',
        subHeader: '',
        message: '¿Seguro de querer eliminar esta tarea?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Cancelado');
            }
          }, {
            text: 'Okay',
            handler: () => {
              console.log('OK');
              this.dataTasks.splice(i,1);
              console.log(this.dataTasks.splice(i,1));
            }
          }
        ]
      });
      await alert.present();
      }

}
