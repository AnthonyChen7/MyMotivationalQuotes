import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../models/quote';

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
  deleteQuoteButtonClicked = new EventEmitter<Quote>();

  constructor() { }

  ngOnInit() {
  }

  deleteQuote(quote: Quote){
    this.deleteQuoteButtonClicked.emit(quote);
  }

  addQuote(){
    this.addQuoteButtonClicked.emit();
  }

}
