import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/appService/app.service';
import { Router, ActivatedRoute} from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  users:any;
  image: any;

  constructor(public router: Router, public appService: AppService, public activatedRoute: ActivatedRoute, public camera: Camera) { 
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

  fotoCamera(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true, //false
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado => {
      this.image = "data:image/jpeg;base64" + resultado;
    }).catch(error => {
      console.log(error)
    });
  }

  fotoGaleria(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true, //false
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado => {
      this.image = "data:image/jpeg;base64" + resultado;
    }).catch(error => {
      console.log(error);
    })
  }

}
