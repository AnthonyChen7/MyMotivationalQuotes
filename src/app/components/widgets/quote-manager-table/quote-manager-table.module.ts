import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteManagerTableComponent } from './quote-manager-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuoteManagerTableComponent],
  exports:[QuoteManagerTableComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class QuoteManagerTableModule { }