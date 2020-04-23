import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService{

    currentuser: IUser

    constructor(private http: HttpClient){
        
    }

    login(userName: string, password: string){
        // this.currentuser = {
        //     id:   1,
        //     userName:'priyaSantosh',
        //     firstName: 'Priya',
        //     lastName: 'Santosh'
        // }

        let loginInfo = { username: userName, password: password };
        const options = {headers: new HttpHeaders({
            'Content-Type': 'application/json'

        })}
       
       return this.http.post('/api/login', loginInfo, options)
        .pipe(tap( data => {
            this.currentuser = <IUser>data['user']
        }))
        .pipe(catchError(err => {
            console.log(err)
            return of(false)
        }))
    }

    UpdateProfile(fName: string, lName: string){
        this.currentuser.firstName = fName
        this.currentuser.lastName = lName
    }

    isAuthenticated(){
        return !!this.currentuser
    }

    checkAuthStatus(){
        this.http.get('/api/currentIdentity')
        .pipe(tap(data => {
            if(data instanceof Object){
                this.currentuser = <IUser>data
                console.log('checkAuthStatus:' + this.currentuser)
            }
        }))
        .subscribe();
        
    }

}