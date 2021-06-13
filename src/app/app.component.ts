import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { fader } from './route-animations';
import { UpdateService } from './services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fader ]
})
export class AppComponent implements OnInit{

  private readonly serverPublicKey = 'BLWK1aBDCf3c5tJqRZvcGTxJWKrV4mATF-qlkr-OODeJa8dR_NrJ0GpT6S_Ir3o6TWkknA-RnMvdZyzqn7JZD1I';

  constructor(private sw: UpdateService, private swPush: SwPush){
    this.sw.checkForUpdates();
  }

  ngOnInit(){
    this.pushSubscription();

    this.swPush.messages.subscribe(message => console.log(message));

    this.swPush.notificationClicks.subscribe(({action, notification}) => {
      window.open(notification?.data?.url);
    })
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  sub:any;
  pushSubscription(){
    if(!this.swPush.isEnabled){
      console.log("Push Notifications aren't enabled!");
      return;
    }
    this.swPush.requestSubscription({
      serverPublicKey: this.serverPublicKey,
    }).then(sub => {
      this.sub = sub;
      console.log(JSON.stringify(sub));
    }).catch(err => {
      console.error(err);
    })
  }
}
