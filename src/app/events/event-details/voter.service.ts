import { Injectable } from '@angular/core';
import { ISession } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class VoterService{

    constructor(private http: HttpClient){

    }
    deleteVoter(eventId: number, session:ISession, votername: string){
        session.voters = session.voters.filter(voter => voter !== votername);

        
        //HttpClient
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${votername}`;
        this.http.delete(url).pipe(catchError(this.handleError('addVoter'))).subscribe();

    }

    addVoter(eventId: number, session:ISession, votername: string){
        //session.voters.push(votername); //Direct adding of voter to sessions using Push method of list

        //HttpClient
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${votername}`;
        const options = { headers: new HttpHeaders ({
            'Content-Type':'/application/json'
        })}

        this.http.post(url, {}, options).pipe(catchError(this.handleError('addVoter'))).subscribe();
    }

    userHasVoted(session:ISession, votername: string): boolean{
        return session.voters.some(voter => voter === votername);
    }

    private handleError<T>(operation = 'operation', results?: T){
        return (error:any):Observable<T> => {
          console.log(error)
          return of(results as T)
        }
      }
}