import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AllMaterialModule} from './material-module';

import {HomeComponent} from './app/home.component';
import {LauncherComponent} from './app/launcher/launcher.component';
import {ProcessRunningComponent} from './app/process-running/process-running.component';

//import { RoutingComponents } from './app-routing-module';
import { WSAppRoutingModule } from './app-routing-module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AllMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    WSAppRoutingModule    
  ],
  entryComponents: [HomeComponent],
  declarations: [
    HomeComponent, 
    LauncherComponent,
    ProcessRunningComponent
  ],
  bootstrap: [HomeComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */