import { Component, OnInit, Input, ViewChild, TemplateRef, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  private buildForm(){
    this.quoteForm = this.formBuilder.group({
      quote: ['',[Validators.required]],
      author: ['',[Validators.required]]
    });
  }

}
