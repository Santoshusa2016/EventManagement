import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService{

    currentuser: IUser

    login(username: string, password: string){
        this.currentuser = {
            id:   1,
            userName:'priyaSantosh',
            firstName: 'Priya',
            lastName: 'Santosh'
        }
    }

    UpdateProfile(fName: string, lName: string){
        this.currentuser.firstName = fName
        this.currentuser.lastName = lName
    }

    isAuthenticated(){
        return !!this.currentuser
    }

}