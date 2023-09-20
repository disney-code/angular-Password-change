import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { PostService } from '../services/post.service';
import { notFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { badInput } from '../common/bad-input';

interface MyData{
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}


@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})

export class PostsComponentComponent implements OnInit {
  post!:MyData[];
  
constructor(private service:PostService){
  

}

ngOnInit(): void {
  this.service.getAll()
  .subscribe({next:(response) =>
    {
      this.post=response as MyData[]
      console.log("response below")
      console.log(response)
    }
  })

  
}

addNewTitle(newPost:HTMLInputElement){
console.log("value in the input box:"+newPost.value)
this.service.create({title:newPost.value})
.subscribe({
  next:response=>{
this.post.unshift(response);
newPost.value=''
},
error:(error:AppError)=>{
  if (error instanceof badInput){
    console.log("error code is bad Input. ")
  }
  else throw error;
}
}
)}

deleteButton(postToRemove:MyData){
  let index=this.post.indexOf(postToRemove)
  this.post=this.post.filter(item=>item!==postToRemove)
  
  if(postToRemove.id!==undefined){
  this.service.delete(postToRemove.id)
  .subscribe({
    
    next:response=>{
      console.log("delete is successful")
      console.log(response)
    // this.post=this.post.filter(item=>item!==postToRemove)
  },
  error:(error:AppError)=>{
this.post.splice(index,0,postToRemove)

    if (error instanceof notFoundError){
      alert("error is an instance of notFoundError.")
    }
    else{
    throw error
  }
   
  }
  }
  )}
}

updateButton(postToUpdate:MyData){
  this.service.update(postToUpdate)
  .subscribe({
    next:response=>{
    console.log(response)},
   
})
}


}
