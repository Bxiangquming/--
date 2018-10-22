import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  course;
  ngOnInit() {
    this.courseId=this.router.snapshot.params["courseid"];
    this.http.get("api/course/"+this.courseId).subscribe((data)=>{
      console.log(data);
      this.course=data;
    })
  }
}
