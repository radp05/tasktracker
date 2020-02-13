import { Component, OnInit } from '@angular/core';
import { flexboxService } from './flexbox.service';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss'],
  providers:[flexboxService]
})
export class FlexboxComponent implements OnInit {
  title:string = "task tracker"
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  projects:{name:string,createdBy:string,description:string}[] =[]
  doStuff(){
    console.log("clicked!!")
  }
  constructor(private flexboxService: flexboxService) { }

  ngOnInit() {
    this.projects = this.flexboxService.projects
  }

}
