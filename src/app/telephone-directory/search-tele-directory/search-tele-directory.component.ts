import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChange, SimpleChanges } from '@angular/core';
import {OpenEditModalComponent} from '../../open-edit-modal/open-edit-modal.component'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {IPersonProps} from '../telephone-directory';

@Component({
  selector: 'app-search-tele-directory',
  templateUrl: './search-tele-directory.component.html',
  styleUrls: ['./search-tele-directory.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTeleDirectoryComponent implements OnInit {

  @Input('searchData') showData;
  @Output() searchDataChange: EventEmitter<any> = new EventEmitter();
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

 
  


  editData(item) {
    const modalRef = this.modalService.open(OpenEditModalComponent, {ariaLabelledBy: 'modal-basic-title',size: 'lg'});
     modalRef.componentInstance.contentShow  = "edit";
     modalRef.componentInstance.modalRefs  = modalRef;
     modalRef.componentInstance.categoryItems = item.value;
     
     
     modalRef.result.then((result) => {
      this.emitSearch(item, result);
      
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.emitSearch(item);
      console.log('a');
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

emitSearch(item, result: IPersonProps){
  const obj = {
    key: item.key,
    val: result
  }
  this.searchDataChange.emit(obj);

}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
