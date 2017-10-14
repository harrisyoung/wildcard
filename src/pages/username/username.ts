import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-username',
  templateUrl: 'username.html',
})
export class UsernamePage {
  username: String;
  constructor(private navCtrl: NavController) {
  }

  navToChatPage() {
    this.navCtrl.push('ChatPage', {
      username: this.username
    })
  }

}
