import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/appService/app.service';
import { UsuarioModel } from '../models/usuarios';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  showConfirmButton: false,
  timer: 1000,
})

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  users:any[]=[];
  idU: any;

  constructor(private appService: AppService) { 
    //this.usuario = this.password = "";
    this.obtenerUsuarios();
  }
  ngOnInit() {
  }

  getId( idUs: string){
    this.idU = idUs;
    console.log(this.idU);
  }

  obtenerUsuarios(){
    this.appService.obtenerUsuarios().then((resp: any) => {
      this.users=resp.cont.usuario;
      console.log(this.users);
    }).catch((error) => {
      console.log(error);
    });
  }
}
