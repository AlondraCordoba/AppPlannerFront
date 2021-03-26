import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/appService/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {

  constructor(public router: Router, public appService: AppService) { }
 
  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem('infoAdmin');
    this.router.navigate(['/']);
  }

  irTab(){
    this.router.navigate(['/tabs-admin/tab1']);
  }

}