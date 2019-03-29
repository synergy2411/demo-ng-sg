import { QuotesPage } from './../quotes/quotes';
import { NavController } from 'ionic-angular';
import { QUOTES_DATA } from './../../model/quotes.model';
import { IQuote } from './../../model/quote.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quotesCollection: { category: string, quotes: IQuote[], icon: string }[];

  constructor(private navCtrl : NavController){}

  ngOnInit() {
    this.quotesCollection = QUOTES_DATA;
    console.log(this.quotesCollection);
  }

  onSelectedCategory(collection: { category: string, quotes: IQuote[], icon: string }){
    this.navCtrl.push(QuotesPage, {category : collection});
  }


}
