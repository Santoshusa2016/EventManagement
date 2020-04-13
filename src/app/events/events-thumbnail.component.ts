import { Component, Input, Output , EventEmitter} from "@angular/core";
import { IEvent } from './shared/event.model';

@Component( {
    selector: 'event-thumbnail',
    template : `
                <div [routerLink]="['/events', event.id]" class="well"> <h4> {{event.name}} </h4 > </div>
                <div> {{event.date}}</div>
                <div> {{event.time}}</div>
                <div> \${{event.price}}</div>
                <div [ngSwitch]="event?.time">
                    <span [class.green]="event?.time =='8:00 am'" *ngSwitchCase="'8:00 am'"> Early </span>
                    <span *ngSwitchCase="'10:00 am'"> Late </span>
                    <span *ngSwitchDefault> Normal </span>
                </div>
                <div *ngIf="event?.location">
                    <span>{{event.location.address}} </span>
                    <span class = "pad-left"> - {{event.location.country}} </span> 
                </div>
                <div [hidden]="!event?.onlineUrl"> 
                    <span> {{event.onlineUrl}} </span>
                </div>
    `,
    styles: [
        `.pad-left {margin-left: 9px;}
        .green {color:violet !important;}
        .well {color: white;}
        `
    ]
 
})
export class EventsThumbnailComponent {
   someproperty: any = 'Some Value'
   @Input() event:IEvent
   @Output() eventClick = new EventEmitter()

   handleClickMe(){
       this.eventClick.emit(this.event)
   }

   callFromParent(){
       console.log('Call from Parent Component')
   }
}