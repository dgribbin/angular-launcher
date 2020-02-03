import { Component, OnInit } from '@angular/core';

import { Routes, RouterModule, Router } from "@angular/router";

import { ActivatedRoute } from "@angular/router";
import {WorkspaceStateLabels} from "../workspaceStateLabels";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {  

  wsl:WorkspaceStateLabels = new WorkspaceStateLabels();;

  constructor(private router : Router) {}

  ngOnInit() {
  }

   startWorkSpaceLayout() {
    this.wsl = new WorkspaceStateLabels();
    this.router.navigateByUrl('/launch', { state: { workspaceState:'stopped' , workspaceStateToBe:'Start' } });
    this.wsl.workspaceStateToBe = 'Start';
    this.wsl.workspaceState = 'Stopped';
    //this.router.navigateByUrl('/launch', { state: this.product });
    console.log("In Navigation component");
    // console.log(this.product)
  }

}