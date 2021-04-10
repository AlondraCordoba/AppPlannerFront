import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/appService/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(public router: Router, public appService: AppService) { }

  ngOnInit() {
  }
  logOut(){
      //localStorage.removeItem('infoAdmin');
      localStorage.removeItem('infoUser');
      //localStorage.clear();
      //     this.router.navigate(['/login']);
      this.router.navigate(['/']);
    
  }

}
