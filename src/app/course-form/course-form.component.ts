import { Component } from '@angular/core';
import {FormGroup, FormArray,FormControl} from '@angular/forms'

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
myForm=new FormGroup({
myArray: new FormArray([])
})

onEnterKeyPress(inputValue:string, inputElement:HTMLInputElement){
  
  console.log(this.myForm.get('myArray'))
  console.log("the above shwos myarray")
  let newControl = new FormControl(inputValue);
  (this.myForm.get('myArray') as FormArray).push(newControl)
  // console.log("enter key press")
  // console.log(this.myForm.value)
  inputElement.value=''

}

deleteFunction(i:number)
{
  (this.myForm.get('myArray') as FormArray).removeAt(i)

}
}
