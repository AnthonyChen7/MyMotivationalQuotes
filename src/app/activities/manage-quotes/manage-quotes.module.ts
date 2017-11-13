import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageQuotesComponent } from './manage-quotes.component';
import { AccordionModule } from 'ngx-bootstrap';
import { CreateQuoteDialogModule } from '../../components/widgets/create-quote-dialog/create-quote-dialog.module';
@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    CreateQuoteDialogModule
  ],
  exports:[ManageQuotesComponent],
  declarations: [ManageQuotesComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ManageQuotesModule { }