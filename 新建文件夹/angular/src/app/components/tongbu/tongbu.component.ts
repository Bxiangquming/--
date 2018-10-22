import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {
  courses;
  constructor(private http:HttpClient,private router:ActivatedRoute,private nav:Router) { }
//a:number;
  ngOnInit() {
    //this.a=this.router.snapshot.params['a'];
  //   this.router.params.subscribe((params)=>{
  //     this.a=params["a"];
  //   });
  // }
  // go(){
  //   this.nav.navigate(['/tongbu',600]);
  this.http.get('/api').subscribe((data)=>{
    this.courses=data;
  })
   }
}
