import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPassword } from '../confirmPassword';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  //lab5
  options = ["facebook", "twitter", "google"]
  // user : User = new User("" , "" ,"" , "" ,"")
  ngOnInit(): void {
  }
  registerForm = this.fb.group({
    userName: ['', [Validators.required ,Validators.pattern(' pattern="[A-Za-z]{3,20}')] ],
    email: ['' , [Validators.required , Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')] ],
    Password: ['',Validators.required],
    confirmpassword: ['' , Validators.required],
    options: [''],
    
  }, { validators: [ConfirmPassword] });

  get userName()
  {
    return this.registerForm.get('userName');
  }

  get email()
  {
    return this.registerForm.get('email');
  }

  get password()
  {
    return this.registerForm.get('password');
  }

  get confirmpassword()
  {
    return this.registerForm.get('confirmpassword');
  }

  
}
