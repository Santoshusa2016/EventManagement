import { Injectable } from "@angular/core";
import { EventService } from './shared/event.service';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventService: EventService) {
        
    }
    resolve(route: ActivatedRouteSnapshot) {
        console.log('EventResolver: resolve')        
        return this.eventService.getEventById(route.params['id'])
    }
}