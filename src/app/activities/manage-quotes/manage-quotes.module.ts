import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageQuotesComponent } from './manage-quotes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ManageQuotesComponent],
  declarations: [ManageQuotesComponent]
})
export class ManageQuotesModule { }