import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noSpaceUsername(c:AbstractControl):ValidationErrors|null{
if (c.value.includes(' ')){
	return {haveSpace:"Error because you have space"}
}
else{
	return null
}

}


export function checkUniqueness(c:AbstractControl)
:Promise<ValidationErrors | null>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(c.value==="charlene"){
				resolve({unique:"Name has been taken"})
			}
			else{
				resolve(null)
			}
		},2000)
	})
}

export function logInAuth(control: AbstractControl): ValidationErrors | null {
	// Your validation logic here
	if (control.value.username==="charles")
		 {
	  return { incorrectCreds: true };
	}
	return null; // Validation passed
      }