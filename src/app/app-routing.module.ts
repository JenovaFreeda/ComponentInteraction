
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"",redirectTo:"users/home",pathMatch: 'full'},
  { path:"usersedit",redirectTo:"users/edit",pathMatch: 'full'},
  { path:"passadmin",redirectTo:"pass/admin",pathMatch: 'full'},
  { path:"passsave",redirectTo:"pass/save",pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
