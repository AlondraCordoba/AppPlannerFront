import { Component, OnInit } from '@angular/core';
//import { Calendar } from '@ionic-native/calendar/ngx';
import { Router } from '@angular/router';
// import * as calendarJS from '../../assets/calendar.js';
// declare var calendarJS: any;

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  calendars = [];

  constructor(private router: Router) { 
    
  /*  this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );*/
    /*this.plt.ready().then(() => {
      this.calendar.listCalendars().then(data =>{
        this.calendar = data
      })
    })*/
  }
  
  
  ngOnInit() {
    // calendarJS();

  }


}
