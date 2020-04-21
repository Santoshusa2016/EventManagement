import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [
        {
            provide: NG_VALIDATORS, 
            useExisting: LocationValidatorDirective, 
            multi: true
        }
    ]
})

export class LocationValidatorDirective implements Validator{

    validate(frmGroup: FormGroup): {[key:string]: any} {
        var addressControl = frmGroup.controls['address'];
        var cityControl = frmGroup.controls['city'];
        var countryControl = frmGroup.controls['country'];
        var onlineUrlControl = (<FormGroup >frmGroup.root).controls['onlineUrl']
        
        console.log('LocationValidatorDirective: validate')

        if ((onlineUrlControl && onlineUrlControl.value) || ((addressControl && addressControl.value)
        && (cityControl && cityControl.value) && (countryControl && countryControl.value)
        )){
            console.log('LocationValidatorDirective: validate if condition')
            return null;            
        }
        else{
             console.log('LocationValidatorDirective: validate else condition')            
            return {'validateLocation': false}
        }
    }

}