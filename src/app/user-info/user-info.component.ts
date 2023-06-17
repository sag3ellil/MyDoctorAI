import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private formBuilder: FormBuilder, private router:Router  ) { }
 
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]
        ,
        checkbox:['']
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  
  role:any
 
  onSubmit(): void {
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }

    console.log("this.form.value ", this.form.value)
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
