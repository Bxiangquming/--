import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Router} from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Child1Component } from './components/child1/child1.component';
import { MyserviceService } from 'src/app/services/myservice.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component'
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbudetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseid',component:TongbudetailComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'', redirectTo:'home',pathMatch:"full"}
    ]),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
