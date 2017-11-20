import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GrowlModule} from 'primeng/primeng';
import { AlertGrowlComponent } from './alert-growl.component';

@NgModule({
  imports: [
    CommonModule,
    GrowlModule
  ],
  declarations: [AlertGrowlComponent],
  exports:[AlertGrowlComponent]
})
export class AlertGrowlModule { }