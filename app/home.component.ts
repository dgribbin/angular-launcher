import { Component } from "@angular/core";
import { Router } from "@angular/router";

/**
 * @title Basic cards
 */
@Component({
  selector: "home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent {
  title = "app";

  constructor(private router: Router) {}
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
