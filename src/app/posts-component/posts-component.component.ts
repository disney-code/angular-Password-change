import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

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

export class PostsComponentComponent {
  post!:MyData[];
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

updateClick(thisPost:MyData,postID:number|undefined,idx:number){
  console.log("postID:",postID)
  console.log("idx:",idx)
  console.log("update clicked")
  console.log("thisPost argument:",typeof thisPost)
  console.log("postID argument:", typeof postID)
  
 this.http.delete('https://jsonplaceholder.typicode.com/posts/${postID}').subscribe(
  {next:response=>{
    console.log("this post to delete: ",thisPost)
    const indexToRemove = this.post.findIndex(item =>
      item.id === thisPost.id 
    );
    console.log("indexToRemove:",indexToRemove)
    this.post.splice(indexToRemove,1)
  },
  error: (error)=>{
    console.error("Update  failred: ",error)
  }}
 )
}

}
