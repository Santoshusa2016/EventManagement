import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector:'login-component',
    templateUrl: './login.component.html',
    styles : [
        `
        em{ float:right; color:Red }
        `
    ]
})

export class LoginComponent {
    username
    password
    mouseoverLogin
    loginInvalid = false;
    constructor(private authService: AuthService, private router: Router){

    }
    
    login(formValues){
        this.authService.login(formValues.username, formValues.password)
        .subscribe(response => {
            console.log(response)
            if(!response){
                this.loginInvalid = true;
            }
            else{
                this.router.navigate(['events'])
            }
        })
        console.log(formValues)
        //document.write(this.authService.currentuser.firstName + '' + this.authService.currentuser.lastName)
        this.router.navigate(['events'])
    }

    cancel(){
        this.router.navigate(['events'])
    }
}