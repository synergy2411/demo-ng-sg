import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { IQuote } from './../../model/quote.interface';


@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  quote : IQuote;
  constructor(private navParams: NavParams,
              private viewCtrl : ViewController){
    this.quote = this.navParams.data['quote'];
    console.log("Quote", this.quote);
  }

  onClose(flag : boolean){
    this.viewCtrl.dismiss(flag);
  }

}
