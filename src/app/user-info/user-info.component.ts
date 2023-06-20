import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CommunService} from '../commun.service'
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    checkbox : new FormControl('')
  });

  submitted = false;
  constructor(private formBuilder: FormBuilder, private router:Router,private communService:CommunService  ) { }
  error:string=''
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        gender: [''],
        age: ['' ]
      
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  
  role:any
 
  onSubmit(): void {
    this.submitted = true;
    console.log("this.form.value ", this.form.value)
    if (this.form.value.age==''|| this.form.value.gender=='') {
     
      setInterval(() => {  this.error="please fill the form";
      setInterval(() => { }, 1000)}, 3000)
      this.error=""
    }

    console.log("this.form.value ", this.form.value)
    this.communService.setAge( this.form.value.age)
    this.communService.setGender( this.form.value.gender)

    this.router.navigate(["/result"]);

  }

  ngOnDestroy()
  {
  
   this.onReset()
   //this.subscription.unsubscribe();
  // this.spotify.clear()
  }
   onReset(): void {
     this.submitted = false;
     this.form.reset();
   }
 

}
