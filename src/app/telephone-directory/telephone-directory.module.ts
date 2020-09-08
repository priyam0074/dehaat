import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {TelephoneDirectoryComponent} from './telephone-directory.component'
import {OpenEditModalComponent } from '../open-edit-modal/open-edit-modal.component';
import { SearchTeleDirectoryComponent } from './search-tele-directory/search-tele-directory.component'
import {OrderByNamePipe} from './telephone-directory.pipe'
@NgModule({
  declarations: [
    TelephoneDirectoryComponent,
    SearchTeleDirectoryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TelephoneDirectoryComponent,
    SearchTeleDirectoryComponent
  ],
  providers: [],
})
export class telephoneDirectoryModule { }