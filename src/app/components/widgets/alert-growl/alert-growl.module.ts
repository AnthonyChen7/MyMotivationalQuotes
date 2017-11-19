import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertGrowlComponent } from './alert-growl.component';
import { AlertService } from '../../services/alert.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertGrowlComponent],
  exports:[AlertGrowlComponent],
  providers:[AlertService]
})
export class AlertGrowlModule { }