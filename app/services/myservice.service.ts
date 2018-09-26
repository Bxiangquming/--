import { Injectable } from '@angular/core';
//@Injectable是否可以注入其他服务
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  get(str){
    return localStorage.getItem(str);
  }
  set(str,val){
    localStorage.setItem(str,val);
  }
}
