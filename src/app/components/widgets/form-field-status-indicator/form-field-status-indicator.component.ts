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

  @Input()
  requirements: string[] = [];

  private errors : string[] = [];
  constructor() { }

  ngOnInit() {
    this.formObject.statusChanges.subscribe(
      (status) => {
        let errors = this.formObject.errors;

        if(errors){
          this.errors =  [];          
          for(let key in errors){
            this.errors.push(errors[key]);
          }
          console.log(this.errors);
        }
      }
    );
  }

}
