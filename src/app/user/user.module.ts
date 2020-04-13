import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UserRoutes } from "./user.routes";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(UserRoutes)
    ],
    providers:[],
    declarations:[
        ProfileComponent,
        LoginComponent
    ]
}

)
export class UserModule { }