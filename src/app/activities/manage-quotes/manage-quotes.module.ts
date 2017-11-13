import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageQuotesComponent } from './manage-quotes.component';
import { AccordionModule } from 'ngx-bootstrap';
import { CreateQuoteDialogModule } from '../../components/widgets/create-quote-dialog/create-quote-dialog.module';
import { DisplayQuoteOfTheDayPanelModule } from '../../components/widgets/display-quote-of-the-day-panel/display-quote-of-the-day-panel.module';
@NgModule({
  imports: [
    CommonModule,
    CreateQuoteDialogModule,
    DisplayQuoteOfTheDayPanelModule
  ],
  exports:[ManageQuotesComponent],
  declarations: [ManageQuotesComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ManageQuotesModule { }