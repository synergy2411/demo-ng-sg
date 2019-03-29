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

    removeQuoteFromFavorite(quote : IQuote){
        const position = this.favoriteQuotes.findIndex(el => el.id === quote.id);
        this.favoriteQuotes.splice(position, 1);
        console.log("Quote Removed.")
    }

    isQuoteFavorite(quote : IQuote){
        let duplicateQuotes = this.favoriteQuotes.filter(ele => ele.id === quote.id );
        return duplicateQuotes.length === 0 ? false:true;
    }

    getFavQuotes(){
        console.log(this.favoriteQuotes.splice(0));
        return this.favoriteQuotes;
    }
}