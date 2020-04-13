import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//This are called as barrels
import { 

  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,  
  SessionListComponent
 } from "./events/index";

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

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule
  ],

  providers: [
    EventService, 
    EventRouteActivator,
    {provide: 'CanDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolver,
    AuthService
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
