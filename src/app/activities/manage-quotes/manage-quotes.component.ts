import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

/** * Import the root state in order to select parts of it. */ 
import * as fromRoot from './../../states/index';
import * as quote from './../../states/quote/quote.actions';
import { AppState } from './../../states/index';

@Component({
  selector: 'manage-quotes',
  templateUrl: './manage-quotes.component.html',
  styleUrls: ['./manage-quotes.component.css']
})
export class ManageQuotesComponent implements OnInit {

  quoteOfTheDay$ : Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new quote.GetQuoteOfTheDayComplete(Math.random().toString()));
    this.quoteOfTheDay$ = this.store.select(fromRoot.getQuoteOfTheDay);
  }

  temp(){
    this.store.dispatch(new quote.GetQuoteOfTheDayComplete(Math.random().toString()));
  }

}
