import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css']
})
export class LauncherComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';

  @Input()
  desktop_term: string = 'Cloud UE desktop'; 
    

  constructor() { }

  ngOnInit() {
  }

  toggleProgress() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}

