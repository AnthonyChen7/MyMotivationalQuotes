import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageQuotesComponent } from './manage-quotes.component';
import { AccordionModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
  ],
  exports:[ManageQuotesComponent],
  declarations: [ManageQuotesComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ManageQuotesModule { }