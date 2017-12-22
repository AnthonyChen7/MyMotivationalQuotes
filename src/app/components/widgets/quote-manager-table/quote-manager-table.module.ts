import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteManagerTableComponent } from './quote-manager-table.component';
import { DataTableModule, SharedModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule
  ],
  declarations: [QuoteManagerTableComponent],
  exports:[QuoteManagerTableComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class QuoteManagerTableModule { }