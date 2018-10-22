import { Injectable } from '@angular/core';
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
