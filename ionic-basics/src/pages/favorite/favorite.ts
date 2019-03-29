import { QuotePage } from './../quote/quote';
import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { IQuote } from './../../model/quote.interface';
import { QuotesService } from './../../services/quote.service';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  favQuotes: IQuote[];

  ngOnInit(){
    this.favQuotes = this.quoteService.getFavQuotes();
    console.log(this.quoteService.getFavQuotes());
  }

  constructor(private quoteService: QuotesService,
    private modalCtrl: ModalController) { }

  onSelectedQuote(quote: IQuote) {
    let modal = this.modalCtrl.create(QuotePage, { quote: quote });
    modal.present();

    modal.onDidDismiss(flag => {
      if (flag) {
        this.quoteService.removeQuoteFromFavorite(quote);
        // this.favQuotes = this.quoteService.getFavQuotes();
      }
    })
  }
}
