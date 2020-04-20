import { Component } from '@angular/core';
import { EventService, ISession } from '../events/shared';

@Component({
    selector:'nav-bar',
    templateUrl:'./navbar.component.html',
    styles:[
        `
        .nav.navbar-nav{font-size:15px;}
        #searchForm {margin-right: 100px;}
        `
    ]
})

export class NavBarComponent{

    searchtxt: string
    foundSessions: ISession[] = []
    constructor(private eventService: EventService){

    }
    searchSessions(){
        console.log("NavBarComponent: searchSessions", this.searchtxt)
        this.eventService.searchSessions(this.searchtxt).subscribe
        (sessions => {
            this.foundSessions = sessions;
        });

        console.log("NavBarComponent: searchSessions", this.foundSessions)
       
    }
}