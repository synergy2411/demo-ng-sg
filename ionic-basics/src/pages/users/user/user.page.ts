import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";

@Component({
    templateUrl : './user.html'
})
export class UserPage{
    username : string;
    constructor(private navParams : NavParams,
                private navCtrl : NavController){
        // this.username = this.navParams.get('username')
        this.username = this.navParams.data['username']
    }

    onGoBack(){
        this.navCtrl.pop();
    }
}