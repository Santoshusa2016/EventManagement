import { EventService } from 'src/app/events/shared/event.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
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
    filterBy:string = 'all'
    sortBy:string = 'votes  '
    constructor(private eventService: EventService, private route: ActivatedRoute) {
        this.addMode = false
    }
    ngOnInit(){

        //Calling the method directly which would be checked and validated by CanActivate method
        //this.event =  this.eventService.getEventById(+this.route.snapshot.params['id'])

        //Calling the http client by passing the ID and subscribing to the observables
        // this.route.params.forEach((params: Params) => {
        //     this.eventService.getEventById(+params['id']).subscribe((event: IEvent)=> {
        //         this.event = event
        //         this.addMode = false
        //     })
        // })

        //calling the resolve method to get the data
         this.route.data.forEach((data) => {
                this.event =  data['event']
                this.addMode = false
        })
        
    }

    addSession(){
        this.addMode = true
    }

    saveNewSession(session:ISession){
        const nextID = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextID + 1
        this.event.sessions.push(session);
        //this.eventService.updateEvent(this.event)
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false
    }
}