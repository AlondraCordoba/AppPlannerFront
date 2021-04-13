import { Component } from '@angular/core';
import { ToDoListModel } from '../models/toDoList';
import { AlertController } from '@ionic/angular';
import {Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AppService } from '../services/appService/app.service';
import { UsuarioModel } from '../models/usuarios';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  showConfirmButton: false,
  timer: 3000,
})


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  toDoListM: ToDoListModel = new ToDoListModel();
  usuario: UsuarioModel = new UsuarioModel();
  tasksList: any[] = [];
    @Output() salida = new EventEmitter();
    idU: any;

    // public listTasks: any;
    // printContacts: any;
    // dataTasks: any;
    // description: string;
  

  constructor(private alertController: AlertController, private appService: AppService) {
    //this.getId(this.usuario._id);
    //this.listTasks = [];
    this.obtenerTasks();
  }


   async addToDoL(forma: NgForm){
    this.idU = window.localStorage.getItem('infoUser')
    this.idU = JSON.parse(this.idU);
    this.idU = this.idU._id;
    console.log(this.idU); 

     this.appService.addToDoList(this.toDoListM, this.idU).then((resp:any)=>{
      console.log(resp);
      forma.reset();
      this.salida.emit();
      window.location.reload();
    }).catch(error=>{
      console.log(error);
      Toast.fire(error.console.error.msg, '', 'error');
    })
    console.log(this.toDoListM);
  }

  async obtenerTasks(){
    this.idU = window.localStorage.getItem('infoUser')
    this.idU = JSON.parse(this.idU);
    this.idU = this.idU._id;
    console.log(this.idU);

    
    this.appService.obtenerUsuario(this.idU).then((resp: any) => {
      this.tasksList=resp.cont.usuario[0].toDoList;
      console.log(this.tasksList);
    }).catch((error) => {
      console.log(error);
    });
  }

  /*async addToDoL(forma:NgForm){
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
      }*/

}
