import { Component, Inject } from "@angular/core";
import { EventService } from './shared/event.service';
import { ActivatedRoute } from "@angular/router";
import { IEvent } from './shared/event.model';
import {TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component(
    {
        selector: 'events-list',
        templateUrl: './events-list.component.html'
    }
)

export class EventsListComponent {
    events:IEvent[]
    
    constructor(private eventService: EventService
        , private route: ActivatedRoute
        , @Inject(TOASTR_TOKEN) private toastr: Toastr)
        {       
    }

    ngOnInit(){
        console.log('EventListComponent:OnInit called')
        this.events = this.route.snapshot.data['events']
    }

    handleEventClicked(data){
        console.log('received:', data.location.address)
    }
    
    handleThumbnailClick(eventName){
        console.log(eventName)
        this.toastr.success(eventName)
    }
}