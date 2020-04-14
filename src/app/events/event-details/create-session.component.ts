import { Component, Output, EventEmitter  } from "@angular/core";
import { FormControl, FormGroup, Validator, Validators } from "@angular/forms";
import { ISession } from '../shared/event.model';
@Component({
    selector:'create-session',
    templateUrl:'./create-session.component.html',
    styles: [
        `
        em{ float:right; color:#E05C65; padding-left: 10px;}
        .error input {background-color:#E3C3C5 ;}
        .error textarea {background-color:#E3C3C5 ;}
        .error ::webkit-input-placeholder {color:red}
        `
      ]
})

export class CreateSessionComponent{
    @Output() saveNewSession = new EventEmitter()
    newSessionFormGroup : FormGroup
    name : FormControl
    presenter : FormControl
    duration : FormControl
    level : FormControl
    abstract : FormControl

    constructor(){

    }

    ngOnInit(){
        this.name = new FormControl('',Validators.required)
        this.presenter = new FormControl('',Validators.required)
        this.duration = new FormControl('',Validators.required)
        this.level = new FormControl('',Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(4000), 
            this.restrictedWords(['priya','bharath'])])

        this.newSessionFormGroup = new FormGroup({
            name: this.name,
            presenter : this.presenter,
            duration : this.duration,
            level : this.level,
            abstract : this.abstract
        })
    }

    saveSession(formValue){
        console.log(formValue)
        let session:ISession = {
            id: undefined,
            name:formValue.name,
            presenter: formValue.presenter,
            duration: +formValue.duration,
            level: formValue.level,
            abstract: formValue.abstract,
            voters:[]

        }
        this.saveNewSession.emit(session)
    }

    //CUSTOM Validator functions which could be created as seperate utility function
    private restrictedWords(words){
     return (control: FormControl):{[key: string]: any} =>
        {
            if(!words) return null
            var invalidwords = words.map(a => control.value.includes(a) ? a: null).filter(w => w != null)
           let data =  (invalidwords && invalidwords.length > 0)
                ? {'restrictedWord': invalidwords.join(',')}
                :null
            console.log(data)
            return data
        }
}

}