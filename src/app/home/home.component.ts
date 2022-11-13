import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { 
    
    

    const sidebarBurgerBtn = document.getElementById('sidebar-burger-button') as HTMLInputElement;
    sidebarBurgerBtn.style.display = "none";
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token') != null) {
      const card_window = document.getElementById('card-window') as HTMLInputElement;
      const register_text = document.getElementById('register-text') as HTMLInputElement;
      console.log(card_window);
      register_text.style.display = "none";
      card_window.style.display = "flex";
    }else{
      const register_text = document.getElementById('register-text') as HTMLInputElement;
      register_text.style.display = "block";

    }
  }
  goBackToPage(pageName : string){
    this.router.navigate([`${pageName}`]);
  }
}
