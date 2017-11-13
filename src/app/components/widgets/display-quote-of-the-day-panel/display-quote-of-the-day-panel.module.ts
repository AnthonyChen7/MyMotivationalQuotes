import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayQuoteOfTheDayPanelComponent } from './display-quote-of-the-day-panel.component';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
  ],
  declarations: [DisplayQuoteOfTheDayPanelComponent],
  exports:[DisplayQuoteOfTheDayPanelComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DisplayQuoteOfTheDayPanelModule { }