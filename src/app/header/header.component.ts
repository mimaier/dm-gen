import { Component, OnInit , ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private ElByClassName: ElementRef) { }
  ngAfterViewInit() {
  
  }
  
  ngOnInit(): void {
    
  }

}
