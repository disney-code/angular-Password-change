// import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { AppErrorHandler } from './common/app-error-handler';
import { InjectionToken } from '@angular/core';
import { FollowersComponent } from './followers/followers.component';
import { FollowersService } from './services/followers.service';
export const API_URL = new InjectionToken<string>('apiUrl');

@NgModule({
  declarations: [
    AppComponent,
    
    CourseFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostsComponentComponent,
    FollowersComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostService,FollowersService,
    {provide:ErrorHandler, useClass:AppErrorHandler},
    {provide:API_URL, useValue:'https://jsonplaceholder.typicode.com/posts'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
