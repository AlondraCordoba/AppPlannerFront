import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AppService } from '../services/appService/app.service';
import { UsuarioModel } from '../models/usuarios';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModalController, AlertController } from '@ionic/angular';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  showConfirmButton: false,
  timer: 1000,
})

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.page.html',
  styleUrls: ['./admin-users.page.scss'],
})
export class AdminUsersPage implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  users:any[]=[];
  @Output() salida = new EventEmitter();
  idU: any;

  constructor(private appService: AppService, private alertController: AlertController, private router: Router) { 
    //this.usuario = this.password = "";
    this.obtenerUsuarios();
  }

  ngOnInit() {
  }

  async  eliminarLibro( idUs: string){
    this.idU = idUs;
    console.log(this.idU);
    // this.router.navigate(['/modal-delete']);
    this.appService.eliminarUsuario(this.idU).then((resp: any) => {
      this.usuario = resp;
      Toast.fire(resp.msg, '', 'success');
      this.salida.emit();
      window.location.reload();
    }).catch( (error) => {
      Toast.fire(error.error.msg, '', 'error');
      console.log(error)
      this.salida.emit();
    })
    console.log(this.usuario);
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
