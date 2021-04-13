import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/appService/app.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  users:any;

  constructor(public router: Router, public appService: AppService, public activatedRoute: ActivatedRoute) { 
    this.users = window.localStorage.getItem('infoUser')
    this.users = JSON.parse(this.users);
  }

  ngOnInit() {
  } 
  logOut(){
      //localStorage.removeItem('infoAdmin');
      window.localStorage.removeItem('infoUser');
      //localStorage.clear();
      //     this.router.navigate(['/login']);
      this.router.navigate(['/']);
  }

}
