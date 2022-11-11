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
  }
  goBackToPage(pageName : string){
    this.router.navigate([`${pageName}`]);
  }
}
