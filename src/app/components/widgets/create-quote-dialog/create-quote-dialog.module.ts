import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuoteDialogComponent } from './create-quote-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CreateQuoteDialogComponent],
  exports:[CreateQuoteDialogComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CreateQuoteDialogModule { }