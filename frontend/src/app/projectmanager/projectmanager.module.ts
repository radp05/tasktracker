import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import {ProjectmanagerAppComponent} from './projectmanager-app.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

import {MaterialModule} from '../shared/material.module'
import { FlexLayoutModule} from '@angular/flex-layout'
import {FormsModule} from '@angular/forms'
//import {ProjectmanagerAppComponent} from './projectmanager-app.component'


const routes:Routes =[
  {path:'project', component:ProjectmanagerAppComponent},
  {path:'**',redirectTo:'project'}
]

@NgModule({
  declarations: [ToolbarComponent, MainContentComponent, SideNavComponent,ProjectmanagerAppComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectmanagerModule { }
