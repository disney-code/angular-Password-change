import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
export function checkMatch(formGroup: FormGroup): AsyncValidatorFn {
	return (control: AbstractControl): Observable<ValidationErrors | null> => {
	  const confirmPass = formGroup.get('confirmPass');
	  const newPassword = control;
    
	  if (confirmPass && newPassword.value !== confirmPass.value) {
		console.log("if got executed")
		console.log("confirmPass value:",confirmPass?.value)
		console.log("newPass value: ", control.value)
	    newPassword.setErrors({ mismatch: true });
	    confirmPass.setErrors({ mismatch: true });
	    return of({ mismatch: true });
	  } else {
		console.log("else got executed")
		console.log("confirmPass value:",confirmPass?.value)
		console.log("newPass value: ", control.value)
		console.log(newPassword)
	    newPassword?.setErrors(null);
	    confirmPass?.setErrors(null);
	    return of(null);
	  }
	};
      }
// export function checkMatch(form: FormGroup) {
// 	return (control: AbstractControl): Promise<ValidationErrors | null>=>{
// 		return new Promise((resolve,reject)=>{
// 			setTimeout(() => {
// 				console.log("password1: ", control.value)
// 				console.log("password 2:",form.get('confirmPass')?.value)
// 				if (control.value === form.get('confirmPass')?.value) {
// 					console.log("password matched")
// 				  resolve(null);
// 				} else {
// 				  console.log("password mismatch")
// 				  resolve({ mismatch: true });
// 				}
// 			      }, 200);
// 		})
// 	}

// }