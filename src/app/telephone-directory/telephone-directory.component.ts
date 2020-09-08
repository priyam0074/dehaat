import { Component, OnInit, ViewEncapsulation, Inject, PLATFORM_ID, INJECTOR, Injector, Pipe, PipeTransform } from '@angular/core';
import {IPersonProps} from './telephone-directory';
import {FormControl} from '@angular/forms';
import { Observable, of } from 'rxjs';
import {debounceTime, throttleTime, distinctUntilChanged, switchMap, map} from 'rxjs/operators';
import {OpenEditModalComponent} from '../open-edit-modal/open-edit-modal.component'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { isPlatformBrowser } from '@angular/common';
import {OrderByNamePipe} from './telephone-directory.pipe'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export type check ={ 
  key: number,
  val: IPersonProps
}
@Component({
  selector: 'app-telephone-directory',
  templateUrl: './telephone-directory.component.html',
  styleUrls: ['./telephone-directory.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  
  
})
export class TelephoneDirectoryComponent implements OnInit {


  
  directoryList: Map<number, IPersonProps> = new Map();
  copydirectoryList: Map<number, IPersonProps> = new Map();
  public searchInput: String = '';
  queryField: FormControl = new FormControl();
  states: Observable<Array<IPersonProps>> ;
  clickedItem :boolean= false;
  clicked: boolean =true;
  showData: Array<IPersonProps>;
  closeResult:string;
  activeCheck: number = 0;


  search = (text) =>
  of(text).pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term === '' ? []
    :this.telephoneData.filter((v) => {
     return this.checkSearchDta(v,term) }).slice(0, 10)
     )
  )


  checkSearchDta(item, checkitem) {
       if(item.name.toLowerCase().indexOf(checkitem.toLowerCase() ) > -1 || item.mobileNo.toString().indexOf(checkitem.toLowerCase() ) > -1 )  {
         return item
       }
  }
  telephoneData: Array<IPersonProps> = [{
    name: "PRIYAM",
    mobileNo: 5675665576,
    address: "dvfvb  fgbfynn"

  },
  {
    name: "Love",
    mobileNo: 2675665576,
    address: "dvfvb  fgbfynn"

  },
  {
    name: "Raman Wv",
    mobileNo: 3475665576,
    address: "dvfvb  fgbfynn"

  },{
    name: "Akash",
    mobileNo: 4675665576,
    address: "dvfvb  fgbfynn"

  },
  {
    name: "shekhar",
    mobileNo: 6675665576,
    address: "dvfvb  fgbfynn"

  },{
    name: "Rajeev",
    mobileNo: 7675665576,
    address: "dvfvb  fgbfynn"

  },{
    name: "taruna",
    mobileNo: 8675665576,
    address: "dvfvb  fgbfynn"

  },{
    name: "tarum",
    mobileNo: 9675665576,
    address: "dvfvb  fgbfynn"

  }]
  // private modalService: NgbModal
  // constructor(@Inject(PLATFORM_ID) private platformId: Object,  private injector: Injector) {
  //    if(isPlatformBrowser(platformId)) {
  //      this.modalService = this.injector.get(NgbModal);
  //    }
  //  }  for manually inject ngbmodal
  constructor(private modalService: NgbModal, private sortPipe: OrderByNamePipe) {

  }

  ngOnInit() {
    this.setData();
    this.showData = JSON.parse(JSON.stringify(this.telephoneData));
    this.queryField.valueChanges.subscribe(data => {
      console.log(this.search(data));
      if(data.length > 2) {
        if(this.clicked) {
          this.clickedItem  = true;
        }
        else {
          this.clicked = !this.clicked;
        }
      }
      
      this.states = this.search(data);
     })
  }

  searchDataChange(event) {
    this.directoryList.set(event.key, {...event.val})
    this.activeCheck = event.key -1;
  }

  editsearchResult(result) {
    this.searchInput = result.name;
    this.copydirectoryList = new Map();
    let obj :check = {key: 0, val: {name:'', mobileNo: 0,address: ""}}
    this.telephoneData = this.sortPipe.transform(this.telephoneData);
    this.telephoneData.forEach((val,index) => {
      if(val.name === result.name) {
        obj.key = index;
        obj.val = val
      }
    })
    this.clickedItem = false;
    this.clicked =false;
    this.copydirectoryList.set(obj.key +1, obj.val);
    this.activeCheck = obj.key;

  }
  setData() {
    this.telephoneData = this.sortPipe.transform(this.telephoneData);
    this.telephoneData.forEach((val,index) => {
      this.directoryList.set(index+1,{...val})
    })
  }
  

  ngAfterViewChecked() {
    // this.queryField.valueChanges.subscribe(data => {
    //   console.log(this.search(data));
    //   this.clickedItem = !this.clickedItem;
    //   this.states = this.search(data);
    //  })
  }

}
