import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'upvote',
    template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButton">
                <i [style.color]="iconColor" class="glyphicon glyphicon-heart"></i>
            </div>
            <div class="badge badge-inverse votingCount">
                <div> {{count}} </div>
            </div>
        </div>
    </div>
    `,
    styleUrls:['./upvote.component.css']
})
export class UpVoteComponent{
    iconColor: string
    @Input() count: number
    @Input() set voted(val) {
        this.iconColor = val? "red": "white"
    }

    @Output() vote = new EventEmitter()
    
    onClick(){
        this.vote.emit('')
    }
}