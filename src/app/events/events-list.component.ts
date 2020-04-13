import { Component } from "@angular/core";
import { EventService } from './shared/event.service';
import { ActivatedRoute } from "@angular/router";
import { IEvent } from './shared/event.model';
declare let toastr

@Component(
    {
        selector: 'events-list',
        templateUrl: './events-list.component.html'
    }
)

export class EventsListComponent {
    events:IEvent[]
    constructor(private eventService: EventService, private route: ActivatedRoute){       
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
        toastr.success(eventName)
    }
}