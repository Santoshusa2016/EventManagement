import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'


@Component({
  templateUrl:'./profile.component.html',
  styles: [
    `
    em{float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5 ;}
    .error ::webkit-input-placeholder {color:red}
    `

  ]
})
export class ProfileComponent implements OnInit {
       profileForm: FormGroup
       firstName: FormControl
       lastName: FormControl

       constructor(private authService: AuthService, private route: Router){
        console.log('Constructor called...')  
        this.authService.login('','')
       }


       ngOnInit(){
        console.log('ProfileComponent')
        
        this.firstName = new FormControl(this.authService.currentuser.firstName, 
                [Validators.required, Validators.pattern('a-zA-Z.*')])
        this.lastName = new FormControl(this.authService.currentuser.lastName, Validators.required)
        this.profileForm = new FormGroup({
          FirstName: this.firstName,
          LastName: this.lastName
        }) 

       }

       cancel(){
         this.route.navigate(['/events'])
       }

       saveProfile(formData){
         console.log("SaveProfile called")
        this.authService.UpdateProfile(formData.FirstName, formData.lastName)
       }

       validatefirstname(){
         return this.firstName.valid || this.firstName.untouched
       }

       validatelastname(){
        return this.lastName.valid || this.lastName.untouched
      }
}