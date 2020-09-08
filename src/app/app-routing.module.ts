import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import  { InventoryComponent } from '../app/inventory/inventory.component'
const routes: Routes = [
  { path: '', redirectTo: '/inventory', pathMatch: 'full' },
  {path:'login',component: LoginComponent},
  {path:'inventory',component: InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
