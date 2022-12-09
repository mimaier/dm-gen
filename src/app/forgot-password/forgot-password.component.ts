import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
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
  changePW(email:string, password:string){
    const signInFailLabel = document.getElementById('sign-in-fail') as HTMLInputElement;
    const signInSuccessLabel = document.getElementById('sign-in-success') as HTMLInputElement;

    if(password == "" || email == ""){
      signInFailLabel.style.visibility = "visible";
      signInSuccessLabel.style.visibility = "hidden";

    }else{
      this.user.changePassword(email, password).subscribe(data=>{
        this.data = Object.values (data);
        signInSuccessLabel.style.visibility = "visible";
        signInFailLabel.style.visibility = "hidden";

      }, (err) => {
        console.log(err);
        signInSuccessLabel.style.visibility = "hidden";
        signInFailLabel.style.visibility = "visible";
      })
    }
    
  }



}

