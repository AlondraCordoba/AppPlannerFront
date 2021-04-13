import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from '../../models/usuarios';
import { ToDoListModel } from '../../models/toDoList';
import { EventCalendarModel } from '../../models/eventsCalendar';


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
    return this.http.get(`${this.url}/usuario/?idUsuario=${id}`).toPromise();
  }

  registrarUsuario(usr: UsuarioModel){
    return this.http.post(`${this.url}/usuario`, usr).toPromise();
  }

  actualizarUsuario( usr: UsuarioModel, id: string){
    return this.http.put(`${this.url}/usuario/?idUsuario=${id}`, usr).toPromise();
  }

  eliminarUsuario(id: string){
    return this.http.delete(`${this.url}/usuario/?idUsuario=${id}`).toPromise();
  }

 // TO DO LIST
 // http://localhost:3000/toDoList/?idUsuario=603e51f51a35a066388f0f28
  addToDoList(toDL: ToDoListModel, idU: string){
    return this.http.post(`${this.url}/toDoList/?idUsuario=${idU}`, toDL).toPromise();
  }

  getToDoList(idU: string){
    return this.http.get(`${this.url}/toDoList/?idUsuario=${idU}`).toPromise();
  }
// http://localhost:3000/toDoList/?idUsuario=603e51f51a35a066388f0f28&idToDoList=603e5d996dcc7c2108734283

  eliminarToDoList(idU: string, idT: string){
    return this.http.delete(`${this.url}/toDoList/?idUsuario=${idU}&idToDoList=${idT}`).toPromise();
  }

  actualizarToDoList(toDL: ToDoListModel, idU: string, idT: string){
    return this.http.put(`${this.url}/toDoList/?idUsuario=${idU}&idToDoList=${idT}`, toDL).toPromise();
  }

   // LOGIN
   loginUsuario(usr: UsuarioModel){
         return this.http.post(`${this.url}/login/`, usr).toPromise();
   }



}
 