import { IQuote } from './../model/quote.interface';
import { Injectable } from "@angular/core";

@Injectable()
export class QuotesService{
    private favoriteQuotes : IQuote[] = [];

    addQuoteToFavorite(quote : IQuote){
        let duplicateQuotes = this.favoriteQuotes.filter(ele => ele.id === quote.id );
        if(duplicateQuotes.length === 0){
            this.favoriteQuotes.push(quote);
            console.log(this.favoriteQuotes);
        }else{
            console.log("Quote already exist.");
        }
        
    }
}