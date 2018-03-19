import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { User } from '../../model/user';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  users: User[] = [];
  user: User;
  name: string;
  lastname: string;
  insertedUsers: User[] = [];
  constructor(public navCtrl: NavController,
              private nativeStorage: NativeStorage) {
    this.user = new User();
    this.user.name = '';
    this.user.lastname = '';
  }
  ionViewDidLoad(){
  }

  getStorage(){
    this.nativeStorage.getItem('users').then(
      data => this.insertedUsers = data,
      error => alert(error)
    );
  }
  
  setStorage(){
    if(this.users && this.user ){
      const newUser = new User();
      newUser.name = this.name;
      newUser.lastname = this.lastname;
      this.users.push(newUser);
      this.nativeStorage.setItem('users', this.users);
    }
  }
}
