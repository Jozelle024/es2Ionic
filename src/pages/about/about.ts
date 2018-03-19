import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';
import { NativeStorage } from '@ionic-native/native-storage';
import { User } from '../../model/user';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  batteryLevel: number;
  isPlugged: boolean;
  users: User[];
  user: User;
  constructor(public navCtrl: NavController,
              private batteryStatus: BatteryStatus,
              private nativeStorage: NativeStorage) {
    
  }
  ionViewDidLoad(){
    this.batteryStatus.onChange().subscribe((status: BatteryStatusResponse) => {
        console.log('ci sono');
        console.log(status);
        this.batteryLevel = status.level;
        this.isPlugged = status.isPlugged;
      });  
  }
  getStorage(){
    this.nativeStorage.getItem('users').then(
      data => this.users = data,
      error => console.error(error)
    );
  }
  
  setStorage(){
    const newUser = new User();
    if(this.users && newUser){
      alert('set storage');
      this.users.push(newUser);
      this.nativeStorage.setItem('users', this.users);
    }
  }

}
