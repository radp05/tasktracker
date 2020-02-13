import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes:Routes =[
  {path:'demo',loadChildren:'./demo/demo.module#DemoModule'},
  {path:'flexbox',loadChildren:'./flexbox/flexbox.module#FlexboxModule'},
  {path:'project',loadChildren:'./projectmanager/projectmanager.module#ProjectmanagerModule'},
  {path:'tasks',loadChildren:'./tasks/tasks.module#TasksModule'}
  // {path:'**',redirectTo:'flexbox'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
