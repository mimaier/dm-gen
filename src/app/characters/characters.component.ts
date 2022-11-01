import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {


  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    
  }

}
