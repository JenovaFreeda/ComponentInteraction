import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: 'users',component: UsersComponent, children: [
     { path: 'home',component: HomeComponent},
     { path:'edit',component: EditComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
