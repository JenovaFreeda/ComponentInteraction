import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { SaveComponent } from './components/save/save.component';
import { PassComponent } from './pass.component';
import { PassRoutingModule } from './pass-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewModule } from '../new/new.module';



@NgModule({
  declarations: [
    AdminComponent,
    SaveComponent,
    PassComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PassRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NewModule
  ]
})
export class PassModule { }
