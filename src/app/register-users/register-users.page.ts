import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AppService } from '../services/appService/app.service';
import { UsuarioModel } from '../models/usuarios';
import Swal from 'sweetalert2';
 
const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 3000,
})

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.page.html',
  styleUrls: ['./register-users.page.scss'],
})
export class RegisterUsersPage implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  @Output() salida = new EventEmitter();
  users:any[]=[];
  idU: any;

  constructor(private alertController: AlertController, private router: Router, private appService: AppService) {  }

  ngOnInit() {
  }

  
  async registerUser(forma: NgForm){
      this.appService.registrarUsuario(this.usuario).then((resp: any) => {
        Toast.fire(resp.msg, '', 'success');
        this.salida.emit();
        window.location.reload();
      }).catch((error) => {
        console.log(error);
        Toast.fire(error.error.msg, '', 'error');
        this.salida.emit();
      });
      console.log(this.usuario);
      forma.reset();
  }

}
