import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { 
    const sidebarBurgerBtn = document.getElementById('sidebar-burger-button') as HTMLInputElement;
    sidebarBurgerBtn.style.display = "block";
  }

  ngOnInit(): void {
  }

}
