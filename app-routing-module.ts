import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProcessRunningComponent} from './app/process-running/process-running.component';
import {LauncherComponent} from './app/launcher/launcher.component'

const routes: Routes = [
    {path: 'process' , component: ProcessRunningComponent},
    {path: 'launch' , component: LauncherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WSAppRoutingModule { }
export const RoutingComponents = [ProcessRunningComponent, LauncherComponent]