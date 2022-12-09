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

  forgotPassword(email:string){
    const noMail = document.getElementById('forgot-pw-no-mail') as HTMLInputElement;
    const forgotSuccess = document.getElementById('forgot-pw-success') as HTMLInputElement;

    if(email == "" || email.includes("@") == false){
      noMail.style.visibility = "visible";
      forgotSuccess.style.visibility = "hidden";

    }else{
      this.user.forgotPWUser(email).subscribe(data=>{
        //this.data = Object.values (data);
        forgotSuccess.style.visibility = "visible";
        noMail.style.visibility = "hidden";
  
       // this.loginUser(email, password);
      })
    }
    console.log(email);
  }

  specialLoginUser(email:string, password:string){
    const signInSuccessLabel = document.getElementById('sign-in-success') as HTMLInputElement;
    if(email.includes("@") == false){
      signInSuccessLabel.style.visibility = "visible";
      signInSuccessLabel.style.color = "red";
      signInSuccessLabel.innerHTML = "This is not a valid email address";
      return("This is not a valid email address");   
    }

    this.user.specialLoginUser(email, password).subscribe(data=>{
      this.data = Object.values (data);
      console.log("over local storage sets");
      localStorage.setItem('userid', this.data[0]);
      localStorage.setItem('username', this.data[1]);
      localStorage.setItem('usermail', this.data[2]);
      localStorage.setItem('token', this.data[3]);
      localStorage.setItem('usergenerations', this.data[4]);
      localStorage.setItem('userfreegenerations', this.data[5]);
      console.log("under local storage sets");

      const accountButton = document.getElementById('accountbtn') as HTMLInputElement;
      const logoutButton = document.getElementById('logoutbtn') as HTMLInputElement;
      console.log(accountButton);
      console.log(logoutButton);

      accountButton.style.display = "block";
      logoutButton.style.display = "block";

     
      this.navigateToPage('/');
    },
    err => {
        signInSuccessLabel.style.visibility = "visible";
        signInSuccessLabel.style.color = "#ff5266";
        signInSuccessLabel.innerHTML = "Email or Password wrong";
    });
    return("This worked");   

  }

  registerUser(username:string, password:string, email:string){

    this.user.registerUser(username, password, email).subscribe(data=>{
      this.data = Object.values (data);
      const signUpSuccessLabel = document.getElementById('sign-up-success') as HTMLInputElement;
      signUpSuccessLabel.style.visibility = "visible";

     // this.loginUser(email, password);

    })
  }
}
