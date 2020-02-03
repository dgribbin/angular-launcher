import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProcessRunningComponent} from './app/process-running/process-running.component';
import {LauncherComponent} from './app/launcher/launcher.component'
import { CreatorComponent } from './app/creator/creator.component';

const routes: Routes = [
     { path: "", pathMatch: "full", redirectTo: "launch" },
    {path: 'process' , component: ProcessRunningComponent},
    {path: 'launch' , component: LauncherComponent},
    { path: "create", component: CreatorComponent },
    { path: "**", component: LauncherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WSAppRoutingModule { }
export const RoutingComponents = [ProcessRunningComponent, LauncherComponent]


// import { NgModule } from "@angular/core";
// import { Routes, RouterModule } from "@angular/router";
// import { ProcessRunningComponent } from "./app/process-running/process-running.component";
// import { LauncherComponent } from "./app/launcher/launcher.component";
// import { CreatorComponent } from './app/creator/creator.component';

// const XXXroutes: Routes = [
//   //  {path: 'launch' , component: LauncherComponent},
//   { path: "", pathMatch: "full", redirectTo: "launch" },
//   { path: "launch", component: LauncherComponent },
//   { path: "process", component: ProcessRunningComponent },
//   { path: "create", component: CreatorComponent },
//   { path: "**", component: LauncherComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class WSAppRoutingModule {}
