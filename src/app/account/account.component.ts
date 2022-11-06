import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  data:any;
  constructor(private router: Router, private user: UsersService) { 
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const greeting = document.getElementById('greeting') as HTMLInputElement;
    greeting.innerHTML = 'Hello ' + localStorage.getItem('username');
    

    
  }
  goBackToPage(pageName : string){
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

    })
  }

  registerUser(username:string, password:string, email:string){

    this.user.registerUser(username, password, email).subscribe(data=>{

      this.data = Object.values (data);
      console.log(this.data)
    })
  }

}
