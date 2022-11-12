import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  data:any;
  constructor(private router: Router, private user: UsersService) { }

  ngOnInit(): void {
  }
  goBackToPage(pageName : string){
    this.router.navigate([`${pageName}`]);
  }
  navigateToPage(pageName : string){
    this.router.navigate([`${pageName}`]);
  }

  loginUser(email:string, password:string){
    this.user.loginUser(email, password).subscribe(data=>{
      this.data = Object.values (data);
      console.log(this.data)
      localStorage.setItem('username', this.data[0]);
      localStorage.setItem('usermail', this.data[0]);
      localStorage.setItem('token', this.data[0]);
      const accountButton = document.getElementById('accountbtn') as HTMLInputElement;
      const logoutButton = document.getElementById('logoutbtn') as HTMLInputElement;
      const registerButton = document.getElementById('registerbutton') as HTMLInputElement;

      console.log(accountButton);
      accountButton.style.display = "block";
      logoutButton.style.display = "block";
      registerButton.style.display = "none";

      const signInSuccessLabel = document.getElementById('sign-in-success') as HTMLInputElement;
      signInSuccessLabel.style.visibility = "visible";
      this.navigateToPage('/');
    })
  }

  registerUser(username:string, password:string, email:string){

    this.user.registerUser(username, password, email).subscribe(data=>{
      this.data = Object.values (data);
      console.log(this.data)

      const signUpSuccessLabel = document.getElementById('sign-up-success') as HTMLInputElement;
      console.log(signUpSuccessLabel);
      signUpSuccessLabel.style.visibility = "visible";

     // this.loginUser(email, password);

    })
  }

}
