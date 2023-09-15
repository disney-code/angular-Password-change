import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface MyData{
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})

export class PostsComponentComponent {
  post:any;
constructor(private http:HttpClient){
  
  http.get<MyData[]>('https://jsonplaceholder.typicode.com/posts')
  .subscribe(response=>
    {
      console.log(Array.isArray(response))
      console.log(response[0])
      this.post=response
    })
}

inputEntered(newPost:HTMLInputElement){
  this.http.post('https://jsonplaceholder.typicode.com/posts',
  {title:newPost.value}).subscribe(
    response=>{
      console.log("Response here:",response)
      this.post.unshift(response)
      newPost.value=''
    }
  )
}

updateClick(thisPost:HTMLElement,postID:number){
  console.log("update clicked")
  
 this.http.patch('https://jsonplaceholder.typicode.com/posts/${postID}',
 {"body":"charlene successfully do a patch"}).subscribe(
  response=>{
    console.log("Response printCharlene:"+response)
    console.log("Response HE printCharlene:"+JSON.stringify(response))
   
    console.log("response end")
    // console.log(response)
  },
  (error)=>{
    console.error("Update w failred: ",error)
  }
 )
}

}
