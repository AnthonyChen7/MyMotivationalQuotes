import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuoteDialogComponent } from './create-quote-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateQuoteDialogComponent],
  exports:[CreateQuoteDialogComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CreateQuoteDialogModule { }