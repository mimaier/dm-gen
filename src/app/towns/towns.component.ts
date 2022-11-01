import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-towns',
  templateUrl: './towns.component.html',
  styleUrls: ['./towns.component.scss']
})
export class TownsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

}
