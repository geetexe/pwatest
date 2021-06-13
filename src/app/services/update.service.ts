import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(public updates: SwUpdate, private toastr: ToastrService) {
    if(updates.isEnabled){
      interval(30000).subscribe(() => updates.checkForUpdate().then(() => console.log('checking for updates...')));
    }
  }

  public checkForUpdates():void{
    this.updates.available.subscribe( event => this.promptUser());
  }
  private promptUser(){
    console.log("updating to new version...");
    this.toastr.info("Reloading...", "Update available.");
    interval(5000).subscribe(() => {
      this.updates.activateUpdate().then(() => document.location.reload());
    });
  }
}
