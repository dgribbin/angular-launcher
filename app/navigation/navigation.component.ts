import { Component, OnInit } from '@angular/core';

import { Routes, RouterModule, Router } from "@angular/router";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  

    constructor(private router : Router) {}

  ngOnInit() {
  }

   startWorkSpaceLayout() {
    this.router.navigateByUrl('/launch', { state: { id:1 , workspaceStateToBe:'Start' } });
    //this.router.navigateByUrl('/launch', { state: this.product });
    console.log("In Navigation component");
    // console.log(this.product)
  }

}