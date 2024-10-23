import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-donate',
    templateUrl: './donate.component.html',
    styleUrl: './donate.component.css'
})
export class DonateComponent {
    isAnon = false;
    donateInfo = new FormGroup({
        cardNumber: new FormControl('', { validators: [Validators.required, Validators.minLength(16), Validators.maxLength(16)] }),
        expDate: new FormControl('', {validators: [Validators.required]}),
        CVV: new FormControl('', {validators: [Validators.required]}),
        firstName: new FormControl('', {validators: [Validators.required]}),
        lastName: new FormControl('', {validators: [Validators.required]}),
        address1: new FormControl('', {validators: [Validators.required]}),
        address2: new FormControl(''),
        City: new FormControl('', {validators: [Validators.required]}),
        State: new FormControl('', {validators: [Validators.required]}),
        postalCode: new FormControl('', {validators: [Validators.required]}),
        isAnon: new FormControl('', {validators: [Validators.required]}),
    });
    onDonate() {
        if(this.donateInfo.invalid)
            return;
        console.log(this.donateInfo);
    }
}
