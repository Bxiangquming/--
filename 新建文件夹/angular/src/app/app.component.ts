import { Component } from '@angular/core';
import {MyserviceService} from './services/myservice.service'
import { ConmonService } from 'src/app/services/conmon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    MyserviceService,
    {provide:ConmonService,useClass:ConmonService}
  ]
})
export class AppComponent {
  constructor(private local:MyserviceService){

  }
  title = 'angular';
}