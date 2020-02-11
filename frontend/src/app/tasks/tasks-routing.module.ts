import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks.component'
const routes: Routes = [{path:'',component:TasksComponent},{path:'**',redirectTo:'tasks'}];





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class TasksRoutingModule { }
