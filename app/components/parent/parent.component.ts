import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[MyserviceService]
})
export class ParentComponent implements OnInit {
  data1:string[]=[];
  data2:string[]=[];
  fun1(i){
    this.data1.push(i)
    this.local.set("list1",this.data1);
  }
  fun3(i){
    this.data2.push(this.data1[i]); 
    this.data1.splice(i,1);
    this.local.set("list1",this.data1);
    this.local.set("list2",this.data2);
  }
  fun4(i){
    this.data1.push(this.data2[i]);
    this.data2.splice(i,1);
    this.local.set("list1",this.data1);
    this.local.set("list2",this.data2);
  }
  del1(i){
    this.data1.splice(i,1);
    this.local.set("list1",this.data1);
  }
  del2(i){
    this.data2.splice(i,1)
    this.local.set("list2",this.data2);
  }
  constructor(private local:MyserviceService) {
    
      if(this.local.get("list1")==" "){
        this.local.set("list1",this.data1);
        this.local.set("list2",this.data2);
      }else{
        this.data1=this.local.get("list1").split(",");
        this.data2=this.local.get("list2").split(",");
      }
  }
  ngOnInit() {
  }
}
