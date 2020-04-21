import { Injectable } from '@angular/core';
import { ISession } from '../shared';

@Injectable()
export class VoterService{
    deleteVoter(session:ISession, votername: string){
        session.voters = session.voters.filter(voter => voter !== votername);
    }

    addVoter(session:ISession, votername: string){
        session.voters.push(votername);
    }

    userHasVoted(session:ISession, votername: string): boolean{
        return session.voters.some(voter => voter === votername);
    }
}