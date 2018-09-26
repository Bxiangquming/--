import { Injectable } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Injectable({
  providedIn: 'root'
})
export class ConmonService implements MyserviceService {
  get(str){
    console.log("get");
    return localStorage.getItem(str);
  }
  set(str,val){
    console.log("set");
    localStorage.setItem(str,val);
  }
  constructor() { }
}
