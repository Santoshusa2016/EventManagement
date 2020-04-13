import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot,Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate{

    constructor(private eventService: EventService, private router: Router){

    }
    
    canActivate(route: ActivatedRouteSnapshot) {
       
        const eventExists = Boolean(this.eventService.getEventById(+ route.params["id"]))
        console.log(eventExists)
        if (eventExists == false) {
         this.router.navigate(['/404']) 
        }
        return eventExists
    }
}