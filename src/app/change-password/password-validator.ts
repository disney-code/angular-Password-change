import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
//control will be the confirmPass fromcontrol object
export function checkMatch(formGroup: FormGroup): AsyncValidatorFn {
	return (control: AbstractControl): Observable<ValidationErrors | null> => {
	  const newPassword = formGroup.get('newPassword');
	  const confirmPass = control;
    
	  if (newPassword && newPassword.value !== confirmPass.value) {
		console.log("password dont match ")
	    newPassword.setErrors({ mismatch: true });
	    console.log("checking newPass to see error mismatch: ",newPassword.hasError('mismatch') )
	    confirmPass?.setErrors({ mismatch: true });
	    console.log("checking confrimpass to see error mismatch: ", confirmPass?.hasError('mismatch'))
		console.log("confirmPass object below:")	
	    console.log(confirmPass)
	    console.log("confirmPass object above:")
	    console.log("newPassword object below:")	
	    console.log(newPassword)
	    console.log("newPassword object above:")
	    return of({ mismatch: true });
	  } else {
		console.log("newPass: ", newPassword?.value)
		console.log("confirmPass: ", confirmPass?.value)
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