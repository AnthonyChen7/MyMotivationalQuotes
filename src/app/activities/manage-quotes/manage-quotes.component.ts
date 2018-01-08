import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

/** * Import the root state in order to select parts of it. */ 
import * as fromRoot from './../../states/index';
import * as quote from './../../states/quote/quote.actions';
import { AppState } from './../../states/index';
import { Quote } from '../../components/models/quote';
import { AlertService } from '../../components/services/alert.service';
import { Alert, AlertType } from '../../components/models/alert';

@Component({
  selector: 'manage-quotes',
  templateUrl: './manage-quotes.component.html',
  styleUrls: ['./manage-quotes.component.css']
})
export class ManageQuotesComponent implements OnInit {

  quoteOfTheDay$ : Observable<any>;
  showCreateQuoteDialog : boolean = false;
  quotes$ : Observable<Quote[]>;
  constructor(private store: Store<any>, private alertService : AlertService) {}

  ngOnInit() {
    this.store.dispatch(new quote.GetQuoteOfTheDay());
    this.store.dispatch(new quote.GetQuoteList());
    this.quoteOfTheDay$ = this.store.select(fromRoot.getQuoteOfTheDay);
    this.quotes$ = this.store.select(fromRoot.getQuotes);

    this.alertService.getAlert().subscribe(
      (alert : Alert) => {
        if(alert){
            if(alert.action === quote.QuoteActionTypes.CREATE_QUOTE && this.showCreateQuoteDialog){
              this.showCreateQuoteDialog = false;
            }
        }
      }
    );
  }

  createQuote(event : Quote){
    this.store.dispatch(new quote.CreateQuote(event));
  }

  toggleCreateQuoteDialogVisibility(isVisibile : boolean){
    this.showCreateQuoteDialog = isVisibile;
  }

  deleteQuote(quoteKey: string){
    this.store.dispatch(new quote.DeleteQuote(quoteKey));
  }
}
