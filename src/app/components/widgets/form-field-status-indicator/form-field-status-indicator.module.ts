import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldStatusIndicatorComponent } from './form-field-status-indicator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TooltipModule.forRoot()
  ],
  declarations: [FormFieldStatusIndicatorComponent],
  exports:[FormFieldStatusIndicatorComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FormFieldStatusIndicatorModule { }