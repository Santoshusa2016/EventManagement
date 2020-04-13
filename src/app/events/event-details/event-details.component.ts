import { EventService } from 'src/app/events/shared/event.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ISession, IEvent } from '../shared/event.model';

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    styles: [
        `
        .container{padding-left:20px; padding-right:20px;}
        .event-image{height: 100px}
        a {cursor: pointer}
        `
    ]
})

export class EventDetailsComponent {
    event:IEvent
    addMode: boolean
    constructor(private eventService: EventService, private route: ActivatedRoute) {
        
    }
    ngOnInit(){
     this.event =  this.eventService.getEventById(+this.route.snapshot.params['id'])
    }

    addSession(){
        this.addMode = true
    }

    saveNewSession(session:ISession){
        const nextID = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextID + 1
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }
}