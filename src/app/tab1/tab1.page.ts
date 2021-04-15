import { Component } from '@angular/core';
import { ToDoListModel } from '../models/toDoList';
import { AlertController } from '@ionic/angular';
import {Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AppService } from '../services/appService/app.service';
import { UsuarioModel } from '../models/usuarios';
import { IndexOutOfBoundException } from '@angular-devkit/schematics/src/utility/update-buffer';

const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 1000,
})


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  toDoListM: ToDoListModel = new ToDoListModel();
  usuario: UsuarioModel = new UsuarioModel();
  tasksList: any[]=[];
    @Output() salida = new EventEmitter();
    idU: any;
    idT: any;

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
      //this.tasksList=this.tasksList.indexOf(this.tasksList.toDoList);
      console.log(this.tasksList);
    }).catch((error) => {
      console.log(error);
    });
    /*this.tasksList = window.localStorage.getItem('infoUser')
    this.tasksList = JSON.parse(this.tasksList);
    this.tasksList = this.tasksList.toDoList;
    console.log(this.tasksList);*/
  }

  async eliminarTasks(idTL: string){
      this.idU = window.localStorage.getItem('infoUser')
      this.idU = JSON.parse(this.idU);
      
      //this.idT = window.localStorage.getItem('infoUser')
     // this.idT = JSON.parse(this.idT);

      this.idU = this.idU._id;

      this.idT = idTL;
      //this.idT = idTL;

      console.log(this.idU);
      console.log(this.idT);

      // this.router.navigate(['/modal-delete']);
      // this.appService.eliminarToDoList(this.idU, this.idT).then((resp: any) => {
      //   this.toDoListM = resp;
      //   Toast.fire(resp.msg, '', 'success');
      //   this.salida.emit();
      //   window.location.reload();
      // }).catch( (error) => {
      //   Toast.fire(error.error.msg, '', 'error');
      //   console.log(error)
      //   this.salida.emit();
      // })
      // console.log(this.toDoListM);
    
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
