import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Tab4Page } from './tab4/tab4.page';
import { Tab3Page } from './tab3/tab3.page';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [Camera, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy} ],
  bootstrap: [AppComponent],
})
export class AppModule {}
