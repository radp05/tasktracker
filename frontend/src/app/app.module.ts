import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import {Routes,RouterModule} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//import { FlexboxComponent } from './flexbox/flexbox.component';
import {MaterialModule} from '../app/shared/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { TasksComponent } from './tasks/tasks.component'





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // TasksComponent
   // FlexboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
