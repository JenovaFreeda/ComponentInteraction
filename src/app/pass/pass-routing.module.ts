import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassComponent } from './pass.component';
import { AdminComponent } from './components/admin/admin.component';
import { SaveComponent } from './components/save/save.component';

const routes: Routes = [
  { path: 'pass',component: PassComponent, children: [
     { path: 'admin',component: AdminComponent},
     { path:'save',component: SaveComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassRoutingModule { }
