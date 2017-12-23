import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteManagerTableComponent } from './quote-manager-table.component';
import { DataTableModule, SharedModule, CheckboxModule } from 'primeng/primeng';
import { CreateQuoteDialogModule } from '../create-quote-dialog/create-quote-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
    CheckboxModule,
    CreateQuoteDialogModule,
  ],
  declarations: [QuoteManagerTableComponent],
  exports:[QuoteManagerTableComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class QuoteManagerTableModule { }