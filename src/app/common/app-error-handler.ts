//handle all unexpected error in our application
//ErrorHandler in angular.io

import { ErrorHandler } from "@angular/core";

export class AppErrorHandler  implements ErrorHandler{
	handleError(error: any): void {
		alert('An unexpected error occurred')
		console.log("Below is error: ")
		console.log("global error reach")
		console.log(error)

	}
}