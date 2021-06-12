import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { fader } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fader ]
})
export class AppComponent {

  constructor(private update: SwUpdate){
    this.updateClient();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  updateClient(){
    if(!this.update.isEnabled){
      console.log("update is not enabled!");
    }
    this.update.available.subscribe(
      event => {
        console.log(`current> ${event?.current}`);
        console.log(`available> ${event?.available}`);
      }
    )
  }
}
