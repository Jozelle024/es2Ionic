import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  batteryLevel: number;
  isPlugged: boolean;
  
  constructor(public navCtrl: NavController,
              private batteryStatus: BatteryStatus) {
    
  }
  ionViewDidLoad(){
    this.batteryStatus.onChange().subscribe((status: BatteryStatusResponse) => {
        console.log('ci sono');
        console.log(status);
        this.batteryLevel = status.level;
        this.isPlugged = status.isPlugged;
      });  
  }
}
