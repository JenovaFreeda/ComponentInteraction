import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../users/components/home/home.component';
import { EditComponent } from '../users/components/edit/edit.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewModule } from '../new/new.module';
import { FormDirective } from '../form.directive';


@NgModule({
  declarations: [
    HomeComponent,
    EditComponent,
    UsersComponent,
    FormDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NewModule
  ]
})
export class UsersModule { }
