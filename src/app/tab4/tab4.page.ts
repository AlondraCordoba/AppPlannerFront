import { Component, OnInit } from '@angular/core';
//import { Calendar } from '@ionic-native/calendar/ngx';
import { Router } from '@angular/router';
// import * as calendarJS from '../../assets/calendar.js';
import { Tab3Page } from '../tab3/tab3.page';
import { NavController, NavParams, AlertController, ModalController, } from '@ionic/angular';
import { Calendar } from '@ionic-native/calendar/ngx';
// declare var calendarJS: any;
import * as moment from 'moment';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit { 
 
  constructor(
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {}
 
  ngOnInit() {}
 
  
}
 
