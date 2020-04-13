import { Injectable } from "@angular/core";
import { EventService } from './shared/event.service';
import { Resolve } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {
        
    }
    resolve() {
        console.log('EventListResolver: resolve')
        return this.eventService.getEvents().pipe(map(events => events))
    }
}