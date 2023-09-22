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
import { NavbarComponent } from './navbar/navbar.component';
import {Router, RouterModule} from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component'
export const API_URL = new InjectionToken<string>('apiUrl');

@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostsComponentComponent,
    FollowersComponent,
    NavbarComponent,
    HomeComponentComponent,
    GithubProfileComponent,
    NotFoundComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponentComponent},
      
      {path:'followers/:id/:username',component:GithubProfileComponent},
      {path:'followers',component:FollowersComponent},
      
      {path:'posts',component:PostsComponentComponent},
      {path:'**',component:NotFoundComponent},
    ])
  ],
  providers: [PostService,FollowersService,
    {provide:ErrorHandler, useClass:AppErrorHandler},
    {provide:API_URL, useValue:'https://jsonplaceholder.typicode.com/posts'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
