import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Effect, Actions } from "@ngrx/effects";
import { Observable } from "rxjs";
// import 'rxjs/add/operator/switchMap';
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
        return this.quoteService.getTodos()
        .map(todos => ({type: quoteActions.QuoteActionTypes.GET_QUOTE_OF_THE_DAY_COMPLETE, payload: todos}))
        .catch(() => Observable.of({type: quoteActions.QuoteActionTypes.GET_QUOTE_OF_THE_DAY_COMPLETE, payload: ""}));
        
    });
}