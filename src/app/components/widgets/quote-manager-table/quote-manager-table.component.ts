import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../models/quote';

@Component({
  selector: 'quote-manager-table',
  templateUrl: './quote-manager-table.component.html',
  styleUrls: ['./quote-manager-table.component.css']
})
export class QuoteManagerTableComponent implements OnInit {

  @Input()
  quotes: Quote[];

  constructor() { }

  ngOnInit() {
  }

  delete(quote: Quote){
    console.log(quote);
  }

}
