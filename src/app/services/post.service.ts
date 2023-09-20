import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../common/data.service';
interface MyData{
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
 
  constructor(http:HttpClient) { 
    super('https://jsonplaceholder.typicode.com/posts',http)
  }
}
