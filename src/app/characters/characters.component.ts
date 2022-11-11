import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {


  constructor(private spinner: NgxSpinnerService) { 
    const sidebarBurgerBtn = document.getElementById('sidebar-burger-button') as HTMLInputElement;
    sidebarBurgerBtn.style.display = "block";
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    
  }

}
