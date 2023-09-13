import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { noSpaceUsername ,checkUniqueness,logInAuth} from './custom-validator';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  loginError = false;
  constructor() {
    // Subscribe to form status changes
    this.form.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        // Form is valid, clear the login error
        this.loginError = false;
      }
    });
  }
  
  form = new FormGroup({
    username:new FormControl('',
    [Validators.required,
    Validators.minLength(3),
    noSpaceUsername],
    [checkUniqueness]),
    
    password: new FormControl('',[Validators.required,
      Validators.minLength(3)])
  },{ validators: logInAuth })
  
onSubmit(){
  
  if (this.form.valid) {
    console.log("Log In successful")
  } else {
    this.loginError=true;
    console.log("login Not successful")
  }
}
    
  onChange(){
    console.log("changes made in input field")
    // console.log(this.form.get('username'))
   
  }

  onPasswordChange(){
    console.log("Password input field has changes")
    // console.log(this.form.get('password'))
    
  }
}
