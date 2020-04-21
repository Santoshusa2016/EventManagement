import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared/event.model';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
selector:"session-list",
templateUrl: './session-list.component.html'    
})

export class SessionListComponent implements OnChanges{
   @Input() sessions: ISession[]
   @Input() filterBy: string
   @Input() sortBy: string

   visibleSessions: ISession[] = []

   constructor(public auth: AuthService, private voterService: VoterService){

   }

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

   toggleVote(session: ISession){
      if (this.userHasVoted(session)) {
         this.voterService.deleteVoter(session, this.auth.currentuser.userName);
      }
      else{
         this.voterService.addVoter(session, this.auth.currentuser.userName);
      }

      if(this.sortBy == "votes"){
         this.visibleSessions.sort(sortByVotesDesc) 
      }
   }

   userHasVoted(session:ISession){
      return this.voterService.userHasVoted(session, this.auth.currentuser.userName);
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

