import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'form-field-status-indicator',
  templateUrl: './form-field-status-indicator.component.html',
  styleUrls: ['./form-field-status-indicator.component.css']
})
export class FormFieldStatusIndicatorComponent implements OnInit {
  @Input()
  formObject: AbstractControl;

  constructor() { }

  ngOnInit() {
    this.formObject.statusChanges.subscribe(
      (status) => {
        if(this.formObject.invalid && this.formObject.dirty){
          let errors = this.formObject.errors;
          console.log(errors);
        }
      }
    );
  }

}
