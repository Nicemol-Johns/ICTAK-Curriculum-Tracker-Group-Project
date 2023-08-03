import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';
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
    this.router.navigate([response.api]);
    Swal.fire('Success!', 'You have successfully logged in.', 'success');
  },
  (error) => {
    console.log('login failed', error);
    Swal.fire('Error!', 'Invalid username or password.', 'error');
  }
   
  )
  

}
}
