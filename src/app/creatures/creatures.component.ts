import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.scss']
})
export class CreaturesComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

}
