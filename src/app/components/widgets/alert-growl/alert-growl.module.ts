import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertGrowlComponent } from './alert-growl.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertGrowlComponent],
  exports:[AlertGrowlComponent]
})
export class AlertGrowlModule { }