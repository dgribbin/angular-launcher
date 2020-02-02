// import { Component, OnInit, Input, Observable } from '@angular/core';
// import {Router, ActivatedRoute} from "@angular/router";
import { Routes, RouterModule, Router } from "@angular/router";

import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "launcher",
  templateUrl: "./launcher.component.html",
  styleUrls: ["./launcher.component.css"]
})
export class LauncherComponent implements OnInit {
  public show: boolean = false;

  @Input()
  desktop_term: string = "Cloud UE desktop";

  public workspaceState: any; 
  // constructor(private router : Router) {}

  // ngOnInit() {
  // }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    //console.log(history.state);
    this.workspaceState = history.state;
    console.log(`this.workspaceState = ${this.workspaceState.workspaceStateToBe}`);
  }

  toggleProgress() {
    this.show = !this.show;
  }
}
