import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-towns',
  templateUrl: './towns.component.html',
  styleUrls: ['./towns.component.scss']
})
export class TownsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {
    const sidebarBurgerBtn = document.getElementById('sidebar-burger-button') as HTMLInputElement;
    sidebarBurgerBtn.style.display = "block";
   }

  ngOnInit(): void {
  }

}
