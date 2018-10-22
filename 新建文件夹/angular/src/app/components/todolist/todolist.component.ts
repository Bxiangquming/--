import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  txt:string;
  arr1:string[]=[];
  arr2:string[]=[];
  arr3:Msg[]=[];
  getvalue(e){
    if(e.keyCode=13){
      this.arr3.push(new Msg(this.txt,false))
      this.txt="";
    }
  };
  fun2(e){
    if(e.keyCode==13){
      this.arr1.push(this.txt);
      this.txt="";
    }
  };
  fun3(i){
    this.arr2.push(this.arr1[i]);
    this.del1(i);
  };
  fun4(i){
    this.arr1.push(this.arr2[i]);
    this.del2(i);
  };
  del1(i){
    this.arr1.splice(i,1);
  };
  del2(i){
    this.arr2.splice(i,1);
  };
}
export class Msg{
  constructor(public title:string,public done:boolean)
  {}
}
