import { Component, Input } from '@angular/core';
import { Quote } from '../../models/quote';

@Component({
  selector: 'display-quote-of-the-day-panel',
  templateUrl: './display-quote-of-the-day-panel.component.html',
  styleUrls: ['./display-quote-of-the-day-panel.component.css']
})
export class DisplayQuoteOfTheDayPanelComponent{

  @Input()
  quote: Quote;

  isOpen : boolean = true;

  constructor() { }

  toggleVisbility(isOpen : boolean){
    this.isOpen = isOpen;
  }

}
