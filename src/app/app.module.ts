import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes'
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { NavBarComponent } from './nav/navbar.component';

//This are called as barrels
import { 

  EventsListComponent,
  EventsThumbnailComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,  
  SessionListComponent,
  UpVoteComponent,
  VoterService,
  LocationValidatorDirective,
  EventResolver
 } from "./events/index";

 import{
   DurationPipe,
   EventService
 } from "./events/shared/index";

import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModelTriggerDirective
}
from "./common/index"



// declare let toastr: Toastr
// declare let jquery: any
let toastr: Toastr = window['toastr'];
let jquery = window['$'];


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    NavBarComponent,
    SimpleModalComponent,
    ModelTriggerDirective,
    UpVoteComponent,
    LocationValidatorDirective
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    HttpClientModule
  ],

  providers: [
    EventService,
    VoterService,
    {
      provide: EventRouteActivator,
      useClass: EventRouteActivator
    },
    {
      provide: 'CanDeactivateCreateEvent', 
      useValue: checkDirtyState
    },
    EventListResolver,
    EventResolver,
    AuthService,
    {
      provide: TOASTR_TOKEN, 
      useValue: toastr
    },
    {
      provide: JQ_TOKEN, 
      useValue: jquery
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if (component.isDirty == false){
    console.log("Do you want to exit the page without saving ?")
     window.confirm("Do you want to exit the page without saving ?")
  }
  return true
}
