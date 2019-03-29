import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserPage } from './user/user.page';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(private navCtrl: NavController) { }

  onUser(name: string) {
    this.navCtrl.push(UserPage, { username: name });
  }

  ionViewCanEnter() {
    console.log("ionViewCanEnter")
    const rnd = Math.floor(Math.random() * 10);
    return rnd > 2;
  }
  ionViewCanLeave() {
    console.log("ionViewCanLeave");
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    })
    return promise;
  }
  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }
  ionViewDidLeave() {
    console.log("ionViewDidLeave");
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad");
  }
  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }
  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }
  ionViewWillUnload() {
    console.log("ionViewWillUnload");
  }

}
