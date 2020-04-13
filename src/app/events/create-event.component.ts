import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
    templateUrl:'./create-event.component.html'
})

export class CreateEventComponent{
    event: any
    isDirty: boolean = false;
    constructor(private router:Router, private eventService: EventService){

    }
    ngOnInit(){
        this.event = {
            id: 1,
            name: 'Ng Spectacular',
            date: new Date('9/26/2036'),
            time: '10:00 am',
            price: 799.99,
            location: {
                address: '1057 DT',
                city: 'Perungalathur',
                country: 'India'
            },
            onlineUrl: 'http://ngspectacular.com',
            imageUrl: "http://ngspectacular.com/logo.png"
        }

    }

    cancel(){
            this.router.navigate(["/events"])
    }

    saveEvent(formValue){
        this.eventService.saveEvent(formValue)
        this.router.navigate(['/events'])
    }
    
}