import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Effect, Actions } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';
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
    .switchMap(() => {
        console.log('in effect');
        return undefined;
    });
}