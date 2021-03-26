import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/appService/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})
export class HomeUserPage implements OnInit {

  constructor(public router: Router, public appService: AppService) { }
 
  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem('infoUser');
    this.router.navigate(['/']);
  }

  irTab(){
    this.router.navigate(['/tabs/tab1']);
  }

}