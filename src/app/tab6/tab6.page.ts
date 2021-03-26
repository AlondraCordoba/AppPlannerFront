import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irAdminU(){
    this.router.navigate(['/admin-users']);
  } 
  irRegistU(){
    this.router.navigate(['/register-users']);
  } 
  irListU(){
    this.router.navigate(['/list-users']);
  } 

}
