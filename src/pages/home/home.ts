// core stuff
import { Component } from '@angular/core';
import { NavController, Platform, Events } from 'ionic-angular';
import { NgZone } from "@angular/core";

// providers
import { BeaconProvider } from '../../app/providers/beacon-provider';

// models
import { BeaconModel } from '../../app/models/beacon-module';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[BeaconProvider]
})
export class HomePage {

  beacons: Array<BeaconModel> = new Array<BeaconModel>();
  zone: any;
  condition: boolean;

  constructor(public navCtrl: NavController, public platform: Platform, public beaconProvider: BeaconProvider, public events: Events) {
    // required for UI update
    this.zone = new NgZone({ enableLongStackTrace: false });
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.beaconProvider.initialise().then((isInitialised) => {
        if (isInitialised) {
          this.condition = false;
          this.listenToBeaconEvents();
        }
      });
    });
  }

  listenToBeaconEvents() {
    this.events.subscribe('didRangeBeaconsInRegion', (data) => {
      // update the UI with the beacon list
      this.zone.run(() => {
        
          let beaconList = data.beacons;
          beaconList.forEach((beacon) => {
            this.condition = true;
            let beaconObject = new BeaconModel(beacon);
            this.beacons = new Array<BeaconModel>();
            this.beacons.push(beaconObject);
          });
      });

    });
  }

}