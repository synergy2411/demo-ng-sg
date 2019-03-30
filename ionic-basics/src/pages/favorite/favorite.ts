import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { IQuote } from './../../model/quote.interface';
import { QuotesService } from './../../services/quote.service';
import { QuotePage } from './../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  favQuotes: IQuote[];

  ionViewWillEnter(){
    this.favQuotes = this.quoteService.getFavQuotes();
  }
    
// ionic cordova build android

  constructor(private quoteService: QuotesService,
    private modalCtrl: ModalController) { }

  onSelectedQuote(quote: IQuote) {
    let modal = this.modalCtrl.create(QuotePage, { quote: quote });
    modal.present();

    modal.onDidDismiss(flag => {
      if (flag) {
        this.quoteService.removeQuoteFromFavorite(quote);
        this.favQuotes = this.quoteService.getFavQuotes();
      }
    })
  }
}
