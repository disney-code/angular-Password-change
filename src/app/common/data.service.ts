import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { catchError } from 'rxjs';
import { AppError } from '../common/app-error';
import { throwError, of } from 'rxjs';
import { notFoundError } from '../common/not-found-error';
import { badInput } from '../common/bad-input';
import { API_URL } from '../app.module';
interface MyData{
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(@Inject(API_URL) private url:string,private http:HttpClient) { }

  getAll(){
    return this.http.get(this.url)
    .pipe(
      catchError(this.handleError)
    )
  }

  create(resource:any){
    return this.http.post(this.url,resource)
    .pipe(
      catchError(this.handleError)
    )
  }

  update(resource:any){
    return this.http.patch(this.url+'/'+resource.id,JSON.stringify({isRead:true}))
    .pipe(
      catchError(this.handleError)
    )
  }

  delete(id:number){
   return throwError(()=>new AppError())
   return this.http.delete(this.url+"/"+id).pipe(
    catchError(this.handleError)
   )
  }

  private handleError(error:HttpErrorResponse){
    if (error.status===404){
      return throwError(()=>new notFoundError())
    }
    if(error.status===400){
      return throwError(()=>new badInput(error))
    }
    return throwError(()=>new AppError(error))
  }


}
