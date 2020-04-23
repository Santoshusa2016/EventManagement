import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';
import { IEvent } from './shared';
import {  } from "rxjs";

@Component({
    templateUrl:'./create-event.component.html'
})

export class CreateEventComponent{
    event = {} as IEvent
    //event: any
    isDirty: boolean = false;
    constructor(private router:Router, private eventService: EventService){
        
    }
    ngOnInit(){
        
        // this.event =  {
        //     id: 1,
        //     name: 'Ng Spectacular',
        //     date: new Date('9/26/2036'),
        //     time: '10:00 am',
        //     price: 799.99,
        //     location: {
        //         address: '1057 DT',
        //         city: 'Perungalathur',
        //         country: 'India'
        //     },
        //     onlineUrl: 'http://ngspectacular.com',
        //     imageUrl: "https://favpng.com/png_view/walt-disney-mickey-mouse-minnie-mouse-png/2ChB6DgF"
        // }
    }

    cancel(){
            this.router.navigate(["/events"])
    }

    saveEvent(formValue){
        this.eventService.saveEvent(formValue).subscribe(() =>
        {
            this.isDirty = false;
            this.router.navigate(['/events']);
        })
        
    }
    
}