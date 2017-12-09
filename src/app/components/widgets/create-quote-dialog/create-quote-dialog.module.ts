import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuoteDialogComponent } from './create-quote-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldStatusIndicatorModule } from '../form-field-status-indicator/form-field-status-indicator.module';
import { InputTextareaModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldStatusIndicatorModule
  ],
  declarations: [CreateQuoteDialogComponent],
  exports:[CreateQuoteDialogComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CreateQuoteDialogModule { }