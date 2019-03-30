import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imageSrc: string = '';

  constructor(private geolocation: Geolocation,
    private alertCtrl: AlertController,
    private httpClient: HttpClient,
    private camera: Camera) { }

  getLocation() {
    this.geolocation.getCurrentPosition()
      .then(position => {
        const alert = this.alertCtrl.create({
          title: "Current Location",
          message: `Latitude : ${position.coords.latitude} 
          Longitude : ${position.coords.longitude}`
        })
        alert.present();
      })
      .catch(error => {
        const alert = this.alertCtrl.create({
          title: "ERROR",
          message: `ERROR : ${error}`
        })
        alert.present();
      });
  }

  getWeather() {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
    this.httpClient.get("https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/12.986181,77.734429", {
      headers: headers
    })
  }

  getPicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageSrc = imageData;
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      const alert = this.alertCtrl.create({
        title: "BASE 64 IMAGE DATA",
        message: base64Image
      })
      alert.present();
    }, (err) => {
      const alert = this.alertCtrl.create({
        title: "ERROR",
        message: err
      })
      alert.present();
    });


  }

}
