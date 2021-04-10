import { Component, OnInit, Output, EventEmitter} from '@angular/core';
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
  timer: 1500,
})

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //usuario: string;
  //password: string;
  usuario: UsuarioModel = new UsuarioModel();
  @Output() salida = new EventEmitter();
  users:any[]=[];
  idU: any;

  constructor(private alertController: AlertController, private router: Router, private appService: AppService) { 
    //this.usuario = this.password = "";
    this.obtenerUsuarios();
  }

  ngOnInit() {
  }

  obtenerUsuarios(){
    this.appService.obtenerUsuarios().then((usuario: any) => {
      this.users = usuario;
      console.log(this.users);
    }).catch((error) => {
      console.log(error);
    });
  }

  loginUsuario(){
      this.appService.loginUsuario(this.usuario).then((resp: any) => {
        if(resp.usuario.role == "ADMIN_ROLE"){

        this.router.navigate(['/home-admin']);  
        localStorage.setItem('infoUser', JSON.stringify(resp.usuario));
        //console.log(this.usuario);
        console.log(resp);
         Toast.fire(resp.msg, '', 'success');

         }else if (resp.usuario.role == "USER_ROLE"){

         this.router.navigate(['/home-user']);
         localStorage.setItem('infoUser', JSON.stringify(resp.usuario));
         //console.log(this.usuario);
         console.log(resp);
         Toast.fire(resp.msg, '', 'success');

        }
        }).catch((error) => {
          Toast.fire(error.error.msg, '', 'error');
          this.salida.emit();
        console.log(error);

      });   
  }
  
  /*async logIn(){
    //ADMIN
    if(this.usuario == 'Admin' && this.password=='pass1234'){
       let navExtras: NavigationExtras = {
          queryParams:{
            userName: this.usuario
          }
       }

       let infoAdmin = {
        userName: this.usuario,
        correo: 'admin@gmail.com',
        tipoUser: 'admin'
       }
       localStorage.setItem('infoAdmin', JSON.stringify(infoAdmin)); //stringify convertir JSON

       // ESTO TAMBIEN SE PUEDE HACER ACCEDIENDO A UN {} CON ESTOS PARAMETROS
       this.appService.userName = infoAdmin.userName;
       this.appService.correo = infoAdmin.correo;
       this.appService.tipoUser = infoAdmin.tipoUser;

       this.router.navigate(['/home-admin'], navExtras);  
       
       //USER
        }else if(this.usuario == 'User' && this.password=='pass1234'){
        let navExtras: NavigationExtras = {
           queryParams:{
             userName: this.usuario
           }
        }
  
        let infoUser = {
         userName: this.usuario,
         correo: 'user@gmail.com',
         tipoUser: 'user'
        }
        localStorage.setItem('infoUser', JSON.stringify(infoUser)); //stringify convertir JSON
  
        // ESTO TAMBIEN SE PUEDE HACER ACCEDIENDO A UN {} CON ESTOS PARAMETROS
        this.appService.userName = infoUser.userName;
        this.appService.correo = infoUser.correo;
        this.appService.tipoUser = infoUser.tipoUser;
  
        this.router.navigate(['/home-user'], navExtras);
      
       }else{
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'ERROR',
          //subHeader: 'Subtitle',
          message: 'LAS CREDENCIALES SON INCORRECTAS',
          buttons: ['OK']
        });
    
        await alert.present();
    
       }

  }*/

  async signUp(){
    this.router.navigate(['/sign-up']);
  }


}
 