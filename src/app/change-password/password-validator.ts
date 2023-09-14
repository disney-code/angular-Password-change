import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";

export function validateOldPass(control: AbstractControl):ValidationErrors|null{
	if (control.value!=1234){
		return {invalidOldPassword:true}
	}
	else{
		return null
	}
}

export function checkMatch(control: AbstractControl):ValidationErrors|null{
	console.log("checkMatch got executed")
if (control.get('newPassword')?.value!=control.get('confirmPass')?.value){
	return {mismatch:true}
}
return null
}

// export function checkMatch(form: FormGroup) {
// export function checkMatch(control: AbstractControl): Promise<ValidationErrors | null>{
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(() => {
// 			currentTime:String;
// 			const now = new Date();
    		
// 			let newPass=control.get('newPassword')?.value
// 			let confirmPass=control.get('confirmPass')?.value
// 			console.log("checkMatch executed at time: "+ now.toLocaleTimeString()+`
// 			newPassword:`+newPass +`.`+ `confirmPass:`+confirmPass)
			
// 			if (newPass==confirmPass) {
// 				console.log("Asyn validator got executed! password matched")
// 				setTimeout(() => {
// 					control.get('confirmPass')?.setErrors(null);
// 				      }, 0);
				
// 				setTimeout(() => {
// 					control.get('newPassword')?.setErrors(null);
// 				      }, 0);
// 				      setTimeout(() => {
// 					console.log("userForm object: ",control)
// 				console.log("newPassword form control object: ", control.get('newPassword'))
// 				console.log("confirmPass form control object: ", control.get('confirmPass'))
				
// 				      }, 2000);
// 				resolve(null);
// 			} else {
// 				console.log("Asyn validator execure password MISMATCH ")
// 				// control.get('newPassword')?.setErrors({ mismatch: true });
// 				// control.get('confirmPass')?.setErrors({ mismatch: true });
				
// 				// control.setErrors({mismatch: true})
// 				// console.log("userForm object: ",control)
// 				// console.log("newPassword form control object: ", control.get('newPassword'))
// 				// console.log("confirmPass form control object: ", control.get('confirmPass'))
// 				setTimeout(() => {
// 					control.get('confirmPass')?.setErrors({ mismatch: true });
// 				      }, 0);
				
// 				setTimeout(() => {
// 					control.get('newPassword')?.setErrors({ mismatch: true });
// 				      }, 0);
				      
// 				      // Set errors on confirmPass control with a slight delay
				
				      
// 				      // Set errors on the FormGroup with a slight delay
// 				setTimeout(() => {
// 					control.setErrors({ mismatch: true });
// 				      }, 0);
// 				setTimeout(() => {
// 					console.log("userForm object: ",control)
// 				console.log("newPassword form control object: ", control.get('newPassword'))
// 				console.log("confirmPass form control object: ", control.get('confirmPass'))
				
// 				      }, 2000);
				
// 				resolve({ mismatch: true });
// 			}
// 			}, 200);
// 	})
// }


//control will be the confirmPass fromcontrol object
// export function checkMatch(formGroup: FormGroup): AsyncValidatorFn {
// 	return (control: AbstractControl): Observable<ValidationErrors | null> => {
// 	  const newPassword = formGroup.get('newPassword');
// 	  const confirmPass = control;
    
// 	  if (newPassword && newPassword.value !== confirmPass.value) {
// 		console.log("password dont match ")
// 	    newPassword.setErrors({ mismatch: true });
// 	    console.log("checking newPass to see error mismatch: ",newPassword.hasError('mismatch') )
// 	    confirmPass?.setErrors({ mismatch: true });
// 	    console.log("checking confrimpass to see error mismatch: ", confirmPass?.hasError('mismatch'))
// 		console.log("confirmPass object below:")	
// 	    console.log(confirmPass)
// 	    console.log("confirmPass object above:")
// 	    console.log("newPassword object below:")	
// 	    console.log(newPassword)
// 	    console.log("newPassword object above:")
// 	    return of({ mismatch: true });
// 	  } else {
// 		console.log("newPass: ", newPassword?.value)
// 		console.log("confirmPass: ", confirmPass?.value)
// 	    newPassword?.setErrors(null);
// 	    confirmPass?.setErrors(null);
// 	    return of(null);
// 	  }
// 	};
//       }
