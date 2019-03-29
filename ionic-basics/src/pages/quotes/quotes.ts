import { QuotesService } from './../../services/quote.service';
import { IQuote } from './../../model/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  category : { category: string, quotes: IQuote[], icon: string };

  constructor(private navParams : NavParams,
              private alertCtrl : AlertController,
              private quoteService : QuotesService){
    // this.category = this.navParams.data['category'];
    this.category = this.navParams.get('category');
    console.log(this.category);
  }

  onFavorite(quote : IQuote){
    const alert = this.alertCtrl.create({
      title : "Are You Sure?",
      message : "Do you really want to make it favorite?",
      buttons : [{
        text : "Yes, please go ahead.",
        handler : () => {
          this.quoteService.addQuoteToFavorite(quote);
        }
      }, {
        text : "No, I changed my mind.",
        role : "Cancel"
      }]
    })
    alert.present();
  }

}
