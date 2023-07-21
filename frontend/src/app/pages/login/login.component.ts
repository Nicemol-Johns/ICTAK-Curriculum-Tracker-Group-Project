import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
User={
  email:'',
  password:''
}
constructor(private router:Router,private authserve:AuthService){ }

login(){
  this.authserve.login(this.User.email,this.User.password).subscribe(response =>{
    console.log('login successful',response);
    this.router.navigate(['/dashboard']);
  })
  

}
}
