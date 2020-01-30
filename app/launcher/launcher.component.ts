import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css']
})
export class LauncherComponent implements OnInit {

  @Input()
  desktop_term: string = 'Cloud UE desktop'; 
    

  constructor() { }

  ngOnInit() {
  }
}

