import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TelephoneDirectoryComponent } from './telephone-directory/telephone-directory.component';
import { telephoneDirectoryModule} from './telephone-directory/telephone-directory.module';
import { OpenEditModalComponent } from './open-edit-modal/open-edit-modal.component'
import {OrderByNamePipe} from './telephone-directory/telephone-directory.pipe'
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutUsComponent,
    InventoryComponent,
    HeaderComponent,
    OpenEditModalComponent,
    OrderByNamePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    telephoneDirectoryModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
  ],
  exports: [OpenEditModalComponent],
  providers: [OrderByNamePipe],
  entryComponents: [OpenEditModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
