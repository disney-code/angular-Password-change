import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators,AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { checkMatch } from './password-validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  // userForm = new FormGroup({
  //   oldPassword:new FormControl('',Validators.required),
  //   newPassword:new FormControl('',Validators.required),
  //   confirmPass:new FormControl('',Validators.required),
  // })
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPass: ['', Validators.required]
    });
    this.userForm.get('newPassword')?.setAsyncValidators(
      checkMatch(this.userForm)
    );
}


get oldPasswordControl(): FormControl {
  return this.userForm.get('oldPassword') as FormControl;
}

onSubmit(){
  console.log("submit button clicked")
  console.log(this.userForm)
  console.log("above is userForm")
  console.log("below is userForm.newPassword")
  console.log(this.userForm.get('newPassword'))
  console.log(this.userForm.get('confirmPass'))
  
}
confirmPassChange(){

  
}

}
