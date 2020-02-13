import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexboxRoutingModule } from './flexbox-routing.module';
import {FlexboxComponent} from './flexbox.component'
import {MaterialModule} from '../shared/material.module'

@NgModule({
  declarations: [FlexboxComponent],
  imports: [
    CommonModule,
    FlexboxRoutingModule,
    MaterialModule
    
  ]
})
export class FlexboxModule {
  
 }
