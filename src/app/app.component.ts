import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StringtransferService } from './stringtransfer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*constructor (private router:Router){}

  title = 'secondfile';
  hello:string='hello world';

  //PROPERTY FOR PROP BINDING
  isdisabled:boolean=false;

  //METHOD DECLARED FOR PROPERTY BINDING

  clickpin(){
    console.log("hello");
  }

  //METHODS FOR ROUTING
  teach(){
this.router.navigate(['xyz']);
  }
  stu(){
    this.router.navigate(['abc']);
  }*/

  constructor(public details:StringtransferService){
    
  }
show:boolean=true;
  
}
