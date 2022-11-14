import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from '../users.service';
@Component({
  selector: 'app-activate-your-account',
  templateUrl: './activate-your-account.component.html',
  styleUrls: ['./activate-your-account.component.scss']
})
export class ActivateYourAccountComponent implements OnInit {
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
  refresh(): void {
    window.location.reload();
  }
  specialLoginUser(email:string, password:string){
    this.user.specialLoginUser(email, password).subscribe(data=>{
      this.data = Object.values (data);
      console.log(this.data)
      localStorage.setItem('userid', this.data[0]);
      localStorage.setItem('username', this.data[1]);
      localStorage.setItem('usermail', this.data[2]);
      localStorage.setItem('token', this.data[3]);
      localStorage.setItem('usergenerations', this.data[4]);
      localStorage.setItem('userfreegenerations', this.data[5]);
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
