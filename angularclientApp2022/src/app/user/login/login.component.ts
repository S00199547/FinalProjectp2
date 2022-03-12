import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup = new FormGroup({});
  message:String="";

  constructor(private fb:FormBuilder,
    private userService:UserService) { }

  ngOnInit() {
    this.signinForm=this.fb.group({
      email:[null,[Validators.required,Validators.email]
    ],
      password:[null,[Validators.required]
  ]
    });
  }
  get form()
  {
    return this.signinForm.controls;
  }

  onSubmit() {
    this.userService.login(this.email.value,this.password.value)
     .subscribe(
      data =>{
        console.log(data);
        this.message=`Login successful for ${data.firstName} need to implement redirect`
      },
      error=>{
        console.log(error);
        this,this.message="Unable to log in please try again"
      }
    )
    
  }

  get password(){
    return this.signinForm.get("password");
  }

  get email(){
    return this.signinForm.get("email")
  }
 

  dismissAlert(){
    this.message="";
  }

}
