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
import { CreatorComponent } from './app/creator/creator.component';

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
    CreatorComponent,
    ProcessRunningComponent,
    NavigationComponent
  ],
  bootstrap: [HomeComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);