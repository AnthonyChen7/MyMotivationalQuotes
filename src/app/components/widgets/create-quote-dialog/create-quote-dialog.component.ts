import { Component, OnInit, Input, ViewChild, TemplateRef, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { Quote } from '../../models/quote';
import { UserCreatedQuote } from '../../models/user-created-quote';

const INIT_VALUE: string = '';
const ALPHANUMERIC_WITH_SPACE_REGEX : string = "^([a-zA-Z0-9]+\\s)*[a-zA-Z0-9]+$";

@Component({
  selector: 'create-quote-dialog',
  templateUrl: './create-quote-dialog.component.html',
  styleUrls: ['./create-quote-dialog.component.css']
})

export class CreateQuoteDialogComponent implements OnInit, OnChanges {
  //https://ng-bootstrap.github.io/#/components/modal/api
  @Input()
  isVisible : boolean = false;

  @ViewChild('content')
  modalDialogContent : TemplateRef<any>;

  @Output()
  dialogClosed = new EventEmitter();

  @Output()
  createQuote = new EventEmitter<Quote>();

  quoteForm : FormGroup;
  modalRef : NgbModalRef;

  private isFormDirty: boolean;

  private requirements:string[] = ["This field is required"];

  constructor(private modalService : NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isVisible']){
      if(this.isVisible === true){
        //use window.setTimeout to allow view-creation in ng-on-change
        window.setTimeout(() => {
          this.buildForm();
          this.modalRef = this.modalService.open(this.modalDialogContent);

          this.modalRef.result.then((result : any) => {
            //close button handler
            this.closeDialog();
          },
          (reason: any) => {
            //dismiss button handler
            this.closeDialog();
          });
        });
      }
      else{
        if(this.modalRef){
          this.modalRef.close();
          this.closeDialog();
        }
      }
    }
  }

  submitQuote(){
    if(this.quoteForm.valid){
      let quoteToCreate = new UserCreatedQuote(this.getQuote().value, this.getAuthor().value);
      this.createQuote.emit(quoteToCreate);
    }
  }

  getQuote() : AbstractControl{
    return this.quoteForm.controls.quote;
  }

  getAuthor() : AbstractControl{
    return this.quoteForm.controls.author;
  }

  inputRequiredValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const value = control.value;
      
      if(value === undefined || value === null || value === ""){
        return {"required":"Input is required"};
      }

      return undefined;
    };
  }

  regexValidator(regexString : string,errorMsg : string = "Input is invalid"): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const value : string = control.value;

      let result = value.match(regexString);

      if(result){
        return undefined;
      }
      else{
        return {"invalid":errorMsg};
      }
    };
  }

  private buildForm(){
    this.quoteForm = this.formBuilder.group({
      quote: [INIT_VALUE,[this.inputRequiredValidator()]],
      author: [INIT_VALUE,[this.inputRequiredValidator(),this.regexValidator(ALPHANUMERIC_WITH_SPACE_REGEX)]]
    });

    this.isFormDirty = false;

    this.quoteForm.valueChanges.subscribe((value)=>{
      this.isFormDirty = value.quote !== INIT_VALUE || value.author !== INIT_VALUE;
    });
  }

  private closeDialog(){
    this.closeDialogHelper();
  }

  private closeDialogHelper(){
    this.modalRef = undefined;
    this.dialogClosed.emit();
  }
}
