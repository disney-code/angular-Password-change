import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators,AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { checkMatch,validateOldPass } from './password-validator';

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
      oldPassword: ['', [Validators.required,validateOldPass]],
      newPassword: ['', Validators.required],
      confirmPass: ['', Validators.required]
    },{
      validators: [checkMatch]
    });
    
}

inputToOldPassWord(){
  // console.log("show old password object")
  // console.log(this.userForm.get('oldPassword'))
}
get oldPasswordControl(): FormControl {
  return this.userForm.get('oldPassword') as FormControl;
}

onSubmit(){
  console.log("submit button clicked")
  console.log(this.userForm)
  console.log(this.userForm.get('newPassword'))
  console.log(this.userForm.get('confirmPass'))
  
}
newPassChange(){
console.log("new password jus recieve input");
console.log(this.userForm)
console.log(this.userForm.get('newPassword'))
console.log("end of new password jus recieve input")
}

onConfirm(){
  console.log("confirm password jus recieve input");
console.log(this.userForm)
console.log(this.userForm.get('newPassword'))
console.log(this.userForm.get('confirmPass'))
console.log("end of confirm password jus recieve input")
}

}
