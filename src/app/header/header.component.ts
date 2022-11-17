import { Component, OnInit , ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private ElByClassName: ElementRef, private router: Router) { }
  ngAfterViewInit() {
  
    const accountButton = document.getElementById('accountbtn') as HTMLInputElement;
    const logoutButton = document.getElementById('logoutbtn') as HTMLInputElement;
   // const registerButton = document.getElementById('registerbutton') as HTMLInputElement;

    if(localStorage.getItem('token') != null){
      accountButton.style.display = "block";
      logoutButton.style.display = "block";
   //   registerButton.style.display = "none";
    }else{
      accountButton.style.display = "none";
      logoutButton.style.display = "none";
   //   registerButton.style.display = "block";
    }
  }
  
  ngOnInit(): void {
    const accountButton = document.getElementById('accountbtn') as HTMLInputElement;
    const logoutButton = document.getElementById('logoutbtn') as HTMLInputElement;
    //const registerButton = document.getElementById('registerbutton') as HTMLInputElement;

    if(localStorage.getItem('token') != null){
      accountButton.style.display = "block";
      logoutButton.style.display = "block";
     // registerButton.style.display = "none";
    }else{
      accountButton.style.display = "none";
      logoutButton.style.display = "none";
     // registerButton.style.display = "block";
    }
  }
  navigateToPage(pageName : string){
    this.router.navigate([`${pageName}`]);
  }
  refresh(): void {
    window.location.reload();
  }
  logoutUser(){
    localStorage.removeItem('username');
    localStorage.removeItem('usermail');
    localStorage.removeItem('token');

    const accountButton = document.getElementById('accountbtn') as HTMLInputElement;
    const logoutButton = document.getElementById('logoutbtn') as HTMLInputElement;
    //const registerButton = document.getElementById('registerbutton') as HTMLInputElement;

    console.log(accountButton);
    accountButton.style.display = "none";
    logoutButton.style.display = "none";
    //registerButton.style.display = "block";

    localStorage.clear();
  

    this.refresh();
}

  switchSidebar() {
    const sidebar = document.getElementById('nav-sidebar') as HTMLInputElement;
    const burgerBtn = document.getElementById('burger-button') as HTMLInputElement;

    if(sidebar.style.visibility === "hidden") {
      sidebar.style.visibility = "unset";
      burgerBtn.style.backgroundColor = "rgba(160, 160, 154, 0.5)";
    }else {
      sidebar.style.visibility = "hidden";
      burgerBtn.style.backgroundColor = "unset";
    }
  }
}


