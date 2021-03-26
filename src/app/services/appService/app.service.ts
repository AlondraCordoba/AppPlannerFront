import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from '../../models/usuarios';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  /*userName: string;
  correo: string;
  tipoUser: string;*/
  
  //url = `http://localhost:3000`;
  url =  `https://aplanner-plan-it.herokuapp.com`;

  constructor(private http: HttpClient) { }

  obtenerUsuarios(){
    return this.http.get(`${this.url}/usuario`).toPromise();
  }  

  obtenerUsuario(id: string){
    return this.http.get(`${this.url}/usuario/${id}`).toPromise();
  }

  registrarUsuario(usr: UsuarioModel){
    return this.http.post(`${this.url}/usuario`, usr).toPromise();
  }

  actualizarUsuario( usr: UsuarioModel, id: string){
    return this.http.put(`${this.url}/usuario/${id}`, usr).toPromise();
  }

  eliminarUsuario(id: string){
    return this.http.delete(`${this.url}/usuario/${id}`).toPromise();
  }


   // LOGIN
   loginUsuario(usr: UsuarioModel){
         return this.http.post(`${this.url}/login/`, usr).toPromise();
   }



}
 