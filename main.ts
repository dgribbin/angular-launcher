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

import { WSAppRoutingModule } from './app-routing-module';
import { NavigationComponent } from './app/navigation/navigation.component';

import { ConstantsService } from './app/constants.service';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AllMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    WSAppRoutingModule,
    FlexLayoutModule    
  ],
  entryComponents: [HomeComponent],
  declarations: [
    HomeComponent, 
    LauncherComponent,
    ProcessRunningComponent,
    NavigationComponent
  ],
  bootstrap: [HomeComponent],
  providers: [ConstantsService]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */