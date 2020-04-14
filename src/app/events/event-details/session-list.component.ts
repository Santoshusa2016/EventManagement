import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared/event.model';

@Component({
selector:"session-list",
templateUrl: './session-list.component.html'    
})
export class SessionListComponent implements OnChanges{
   @Input() sessions: ISession[]
   @Input() filterBy: string
   @Input() sortBy: string

   visibleSessions: ISession[] = []

   ngOnChanges(): void {
      if(this.sessions){
         this.filterSessions();
         this.sortBy === 'names' ? 
                           this.visibleSessions.sort(sortByNameAsc)
                           : this.visibleSessions.sort(sortByVotesDesc) 
      }
   }

    filterSessions() {
      if (this.filterBy == "all") {
         this.visibleSessions = this.sessions.slice();
      }
      else {
         this.visibleSessions = this.sessions.filter(a => {
            return a.level.toLocaleLowerCase() === this.filterBy;
         });
      }
   }
}

function sortByNameAsc(s1:ISession, s2: ISession) {
   if (s1.name > s2.name) return 1
   else if (s1.name == s2.name) return 0
   else return -1
}

function sortByVotesDesc(s1:ISession, s2: ISession) {
   return s2.voters.length - s1.voters.length
}