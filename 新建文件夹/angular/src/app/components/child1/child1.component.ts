import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }
  @Input() arr1;
  @Input() arr2;
  @Output() delete1=new EventEmitter();
  @Output() delete2=new EventEmitter();
  @Output() check1=new EventEmitter();
  @Output() check2=new EventEmitter();
  del1(i){
    this.delete1.emit(i);
  }
  del2(i){
    this.delete2.emit(i);
  }
  fun3(i){
    this.check1.emit(i);
  }
  fun4(i){
    this.check2.emit(i);
  }
  ngOnInit() {
  }

}
