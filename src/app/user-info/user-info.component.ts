import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  submitted = false;
  constructor() { }
 
  ngOnInit(): void {
  
  }


  
  role:any
 
  onSubmit(): void {
   
   
  }
 ngOnDestroy()
 {

  this.onReset()
  //this.subscription.unsubscribe();
 // this.spotify.clear()
 }
  onReset(): void {
    this.submitted = false;
  
  }

}
