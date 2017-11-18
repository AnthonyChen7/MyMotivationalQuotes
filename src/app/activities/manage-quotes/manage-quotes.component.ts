import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

/** * Import the root state in order to select parts of it. */ 
import * as fromRoot from './../../states/index';
import * as quote from './../../states/quote/quote.actions';
import { AppState } from './../../states/index';
import { Quote } from '../../components/models/quote';

@Component({
  selector: 'manage-quotes',
  templateUrl: './manage-quotes.component.html',
  styleUrls: ['./manage-quotes.component.css']
})
export class ManageQuotesComponent implements OnInit {

  quoteOfTheDay$ : Observable<any>;
  showCreateQuoteDialog : boolean = false;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new quote.GetQuoteOfTheDay());
    this.quoteOfTheDay$ = this.store.select(fromRoot.getQuoteOfTheDay);
  }

  temp(){
    this.store.dispatch(new quote.GetQuoteOfTheDay());
  }

  createQuote(event : Quote){
    this.store.dispatch(new quote.CreateQuote(event));
  }

  toggleCreateQuoteDialogVisibility(isVisibile : boolean){
    this.showCreateQuoteDialog = isVisibile;
  }
}
