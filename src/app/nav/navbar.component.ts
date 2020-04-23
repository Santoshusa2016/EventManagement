import { Component } from '@angular/core';
import { EventService, ISession } from '../events/shared';
import { AuthService } from '../user/auth.service';

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
    constructor(private eventService: EventService, public authService: AuthService){

    }
    searchSessions(){
        console.log("NavBarComponent: searchSessions", this.searchtxt)

        // //Get by standard typescript function
        // this.eventService.searchSessions(this.searchtxt).subscribe
        // (sessions => {
        //     this.foundSessions = sessions;
        // });

        //Get by HttpClient
        this.eventService.searchSessionsByQueryString(this.searchtxt).subscribe
        (sessions => {
            this.foundSessions = sessions;
        });

        console.log("NavBarComponent: searchSessions", this.foundSessions)
       
    }
}