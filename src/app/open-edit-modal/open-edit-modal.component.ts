import { Component, OnInit, Input, Injectable } from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {IPersonProps} from '../telephone-directory/telephone-directory';

@Component({
  selector: 'app-open-edit-modal',
  templateUrl: './open-edit-modal.component.html',
  styleUrls: ['./open-edit-modal.component.css']
})

export class OpenEditModalComponent implements OnInit {


@Input() public contentShow;
@Input('modalRefs') public modalRefs;
@Input('categoryItems') public categoryItems;

model: IPersonProps = {name: '',
  mobileNo: 0,
  address: ''
    };
registerForm: FormGroup;
submitted: boolean;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.model = {...this.model, name: this.categoryItems.name, mobileNo:this.categoryItems.mobileNo , address: this.categoryItems.address};
    console.log(this.model)
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobileNo: [0, [Validators.required,Validators.pattern('[0-9]+$')]]
});
  }

  _keyPress(event: any) {
    var pattern;
    
      pattern = /[0-9]/;
    
  
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
  
    }
  }

  get f() { return this.registerForm.controls; }
  onSubmit(model) {
   var data ;
         this.submitted = true;
         let modalref =  this.modalRefs;
         // stop here if form is invalid
         if (this.registerForm.invalid) {
             return;
         }

         modalref.close(model);
        }

}
