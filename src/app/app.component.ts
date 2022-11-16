import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UsersService} from './users.service';

//pkill -f node


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dm-gen';
  weirdthing = "stuff";

  constructor(){
   
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['animationState'];
   }
}
