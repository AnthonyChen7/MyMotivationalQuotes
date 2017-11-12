import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Effect, Actions } from "@ngrx/effects";
import { Observable, Observer } from "rxjs";
import { QuotesService } from "../../components/services/quotes.service";
import { CustomAction } from '../custom-action';
import * as quoteActions from "./quote.actions";


@Injectable()
export class QuoteEffects{
    constructor(private quoteService : QuotesService, private actions : Actions){

    }

    @Effect()
    loadQuoteOfTheDay$ : Observable<Action> = 
    this.actions.ofType(quoteActions.QuoteActionTypes.GET_QUOTE_OF_THE_DAY)
    .switchMap((action) => {
        return Observable.create(
            (observer : Observer<Action>) => {
                this.quoteService.getQuoteOfTheDay()
                .then((success) => {
                    observer.next(new quoteActions.GetQuoteOfTheDayComplete(success.quote));
                })
                .catch((error) => {
                    observer.next(new quoteActions.GetQuoteOfTheDayComplete("Error occured in server"));
                });
            }
        );
    });
}