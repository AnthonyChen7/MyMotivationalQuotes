import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../models/quote';
import { UserCreatedQuote } from '../../models/user-created-quote';

@Component({
  selector: 'quote-manager-table',
  templateUrl: './quote-manager-table.component.html',
  styleUrls: ['./quote-manager-table.component.css']
})
export class QuoteManagerTableComponent implements OnInit {

  @Input()
  quotes: Quote[];

  @Output()
  addQuoteButtonClicked = new EventEmitter();

  @Output()
  deleteQuoteButtonClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteQuote(quote: UserCreatedQuote){
    this.deleteQuoteButtonClicked.emit(quote.getKey());
  }

  addQuote(){
    this.addQuoteButtonClicked.emit();
  }

}
