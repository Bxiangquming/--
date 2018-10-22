import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  videoarr;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("/api/video").subscribe((data)=>{
      this.videoarr=data;
    })
  }

}
