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


  loginUser(email:string, password:string){
    let signInResponse : String;
    const signInSuccessLabel = document.getElementById('sign-in-success') as HTMLInputElement;
    if(email.includes("@") == false){
      signInSuccessLabel.style.visibility = "visible";
      signInSuccessLabel.style.color = "red";
      signInSuccessLabel.innerHTML = "This is not a valid email address";
      return("This is not a valid email address");   
    }

    this.user.loginUser(email, password).subscribe(data=>{
      this.data = Object.values (data);
      localStorage.setItem('userid', this.data[0]);
      localStorage.setItem('username', this.data[1]);
      localStorage.setItem('usermail', this.data[2]);
      localStorage.setItem('token', this.data[3]);
      localStorage.setItem('usergenerations', this.data[4]);
      localStorage.setItem('userfreegenerations', this.data[5]);
      localStorage.setItem('userloginable', this.data[6]);

      if(localStorage.getItem('userloginable') == "1"){
        const accountButton = document.getElementById('accountbtn') as HTMLInputElement;
        const logoutButton = document.getElementById('logoutbtn') as HTMLInputElement;
        //const registerButton = document.getElementById('registerbutton') as HTMLInputElement;
  
        accountButton.style.display = "block";
        logoutButton.style.display = "block";
       // registerButton.style.display = "none";

        if(window.innerWidth < 800) {
          const header_logo = document.getElementById('header_logo') as HTMLInputElement;
          header_logo.style.width = ("250px");
          header_logo.style.marginLeft = "10px"; 
        }

        this.navigateToPage('/');
      }else{
        signInSuccessLabel.style.visibility = "visible";
        signInSuccessLabel.style.color = "#ff5266";
        signInSuccessLabel.innerHTML = "Check your email to activate your account";
      }

    },
    err => {
        signInSuccessLabel.style.visibility = "visible";
        signInSuccessLabel.style.color = "#ff5266";
        signInSuccessLabel.innerHTML = "Email or Password wrong";
    });

    return("Login was successful");

  }

  registerUser(username:string, password:string, email:string){
    const signUpSuccessLabel = document.getElementById('sign-up-success') as HTMLInputElement;
    if(email.includes("@") == false){
      signUpSuccessLabel.style.visibility = "visible";
      signUpSuccessLabel.style.color = "#ff5266";
      signUpSuccessLabel.innerHTML = "This is not a valid email address";
      return("This is not a valid email address");   
    }

    this.user.registerUser(username, password, email).subscribe(data=>{
      this.data = Object.values (data);
      const signUpSuccessLabel = document.getElementById('sign-up-success') as HTMLInputElement;
      signUpSuccessLabel.style.color = "#47fc77";
      signUpSuccessLabel.innerHTML = "Successfully registered! <br>Please check your email account";
      signUpSuccessLabel.style.visibility = "visible";
      const usernametxt = document.getElementById('usernametxt') as HTMLInputElement;
      const passwtxt = document.getElementById('passwtxt') as HTMLInputElement;
      const emailtxt = document.getElementById('emailtxt') as HTMLInputElement;
      usernametxt.value = "";
      passwtxt.value = "";
      emailtxt.value = "";

     // this.loginUser(email, password);

    })
    return("Register was successful");

  }

}
