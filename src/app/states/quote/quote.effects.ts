import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Observable, Observer } from "rxjs";
import { JsonConvert } from "json2typescript";
import { QuotesService } from "../../components/services/quotes.service";
import { CustomAction } from '../custom-action';
import * as quoteActions from "./quote.actions";
import { Quote } from "../../components/models/quote";


@Injectable()
export class QuoteEffects {
  private jsonConverter: JsonConvert;
  constructor(private quoteService: QuotesService, private actions: Actions) {
    this.jsonConverter = new JsonConvert();
  }

  @Effect()
  loadQuoteOfTheDay$: Observable<Action> =
  this.actions.ofType(quoteActions.QuoteActionTypes.GET_QUOTE_OF_THE_DAY)
    .switchMap((action) => {
      return Observable.create(
        (observer: Observer<Action>) => {
          this.quoteService.getQuoteOfTheDay()
            .then((success) => {
              let quote: Quote = this.jsonConverter.deserialize(success, Quote);
              observer.next(new quoteActions.GetQuoteOfTheDayComplete(success));
            })
            .catch((error) => {
              observer.next(new quoteActions.GetQuoteOfTheDayComplete(undefined));
            });
        }
      );
  });

  @Effect()
  createNewQuote$: Observable<Action> =
  this.actions.ofType(quoteActions.QuoteActionTypes.CREATE_QUOTE)
  .map(toPayload)
  .switchMap((payload) => {
    return Observable.create(
      (observer: Observer<Action>) => {
        this.quoteService.createQuote(payload)
        .then(() => {
          
        })
        .catch((error) => {
          console.log(error);
        });
      }
    );
  });
}