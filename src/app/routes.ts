import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventResolver } from './events/event-resolver.service';

export const appRoutes: Routes = [  
    {path:'events', component: EventsListComponent, resolve: {events:EventListResolver}},
    {path:'events/new',component:CreateEventComponent, canDeactivate:['CanDeactivateCreateEvent']},    
    {path:'events/sessions/new', component: CreateSessionComponent},
    // {path:'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path:'events/:id', component: EventDetailsComponent, resolve:{event: EventResolver}},
    {path:'404', component:Error404Component},
    {path:'', redirectTo:'/events', pathMatch:'full'},
    {path: 'user', loadChildren:'./user/user.module#UserModule'}

]