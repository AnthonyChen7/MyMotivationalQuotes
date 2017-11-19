import { Component, OnInit, Input, ViewChild, TemplateRef, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { Quote } from '../../models/quote';

@Component({
  selector: 'create-quote-dialog',
  templateUrl: './create-quote-dialog.component.html',
  styleUrls: ['./create-quote-dialog.component.css']
})
export class CreateQuoteDialogComponent implements OnInit, OnChanges {
  //https://ng-bootstrap.github.io/#/components/modal/api
  readonly ALPHANUMERIC_WITH_SPACE_REGEX : string = "^([a-zA-Z0-9]+\\s)*[a-zA-Z0-9]+$";
  @Input()
  isVisible : boolean = false;

  @ViewChild('content')
  modalDialogContent : TemplateRef<any>;

  @Output()
  dialogClosed = new EventEmitter();

  @Output()
  createQuote = new EventEmitter<Quote>();

  quoteForm : FormGroup;

  constructor(private modalService : NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isVisible'] && this.isVisible === true){
      //use window.setTimeout to allow view-creation in ng-on-change
      window.setTimeout(() => {
        this.buildForm();
        let modalRef = this.modalService.open(this.modalDialogContent);

        modalRef.result.then((result : any) => {
          //close button handler
          this.dialogClosed.emit();
        },
        (reason: any) => {
          //dismiss button handler
          this.dialogClosed.emit();
        });
      });
      
    }
  }

  submitQuote(){
    if(this.quoteForm.valid){
      let quoteToCreate = new Quote();
      quoteToCreate.quote = this.getQuote().value;
      quoteToCreate.author = this.getAuthor().value;
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
      quote: ['',[this.inputRequiredValidator()]],
      author: ['',[this.inputRequiredValidator(),this.regexValidator(this.ALPHANUMERIC_WITH_SPACE_REGEX)]]
    });
  }
}
