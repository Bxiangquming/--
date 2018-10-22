import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor() { }
  txt:string;
  
  @Input() arr;
  @Output() delindex=new EventEmitter();
  emit(i){
    this.delindex.emit(i);
  };
  @Output() txt1=new EventEmitter();
  fun2(e,i){
   if(e.keyCode==13){
     this.txt1.emit(i);
     this.txt="";
   }
  }
  ngOnInit() {
  }

}
