import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login:any;

ngOnInit(){
  this.login=new FormGroup({
    userId:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
    
  })
}

get userId(){
  return this.login.get("userId")
}
get password(){
  return this.login.get("password")
}


onsubmit(){
  this.login.markAllAsTouched();
  
  if(this.login.valid ){
    alert("Submitted")
  console.log(this.login.value)
  }else{
    alert("Please Give valid info")
  }
 }

}
