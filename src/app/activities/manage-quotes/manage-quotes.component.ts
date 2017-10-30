import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

/** * Import the root state in order to select parts of it. */ 
import * as fromRoot from './../../states/index';
import * as quote from './../../states/quote/quote.actions';
import * as temp from './../../states/temp/temp.actions';
import { AppState } from './../../states/index';

@Component({
  selector: 'manage-quotes',
  templateUrl: './manage-quotes.component.html',
  styleUrls: ['./manage-quotes.component.css']
})
export class ManageQuotesComponent implements OnInit {

  quoteOfTheDay$ : Observable<any>;
  tempOfTheDay$ : Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new quote.GetQuoteOfTheDayComplete(Math.random().toString()));
    this.store.dispatch(new temp.Temp("a"));
    this.quoteOfTheDay$ = this.store.select(fromRoot.getQuoteOfTheDay);
    this.tempOfTheDay$ = this.store.select(fromRoot.getQuoteOfTheDayTemp);
  }

  temp(){
    this.store.dispatch(new quote.GetQuoteOfTheDayComplete(Math.random().toString()));
    this.store.dispatch(new temp.Temp("b"));
  }

}
