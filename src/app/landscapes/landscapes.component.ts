import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-landscapes',
  templateUrl: './landscapes.component.html',
  styleUrls: ['./landscapes.component.scss']
})
export class LandscapesComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

}
