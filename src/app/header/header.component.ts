import { Component, OnInit , ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private ElByClassName: ElementRef, private router: Router) { }
  ngAfterViewInit() {
  
  }
  
  ngOnInit(): void {
    
  }
  goBackToPage(pageName : string){
    this.router.navigate([`${pageName}`]);
  }
/*
  signUserIn(pageName : string){
    console.log("YESTH");
    var mysql = require('mysql');
    console.log("YESTH1");

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "fstehtfürfreunde"
    });
    console.log("YESTH2");

    con.connect(function(err : any) {
      if (err) throw err; 
      console.log("Connected!");
    });
    console.log("YESTH3");


  }*/

}


