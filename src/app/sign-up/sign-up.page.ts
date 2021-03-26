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
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  @Output() salida = new EventEmitter();
  users:any[]=[];
  idU: any;

  constructor(private alertController: AlertController, private router: Router, private appService: AppService) {  }

  ngOnInit() { 
  }

  async logIn(){
    this.router.navigate(['/login']);
  } 
  /*async signUp(){
    this.router.navigate(['/sign-up']);
  }*/

  async signUp(forma: NgForm){
      this.appService.registrarUsuario(this.usuario).then((resp: any) => {
        Toast.fire(resp.msg, '', 'success');
        this.salida.emit();
      }).catch((error) => {
        console.log(error);
        Toast.fire(error.error.msg, '', 'error');
        this.salida.emit();
      });
      console.log(this.usuario);
      forma.reset();
  }

}
