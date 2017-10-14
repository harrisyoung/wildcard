import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {} from '../../models/account/account.interface';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  account = {} as Account;
  loginPassword : String;

  constructor(private navCtrl: NavController,private alertCtrl:AlertController, private navParams: NavParams) {
  }


  navigateToPage(pageName: string) {
     pageName === 'UsernamePage' ? this.navCtrl.setRoot(pageName) :this.navCtrl.push(pageName);


  }
  cekLogin(){
    if(this.loginPassword === "babel"){
      this.navCtrl.setRoot("UsernamePage");
    }
    else {
      this.alertCtrl.create({
        title: 'Wrong Pass!',
        subTitle: 'pass huruf kecil semua',
        buttons: ['OK']
      }).present();
    }
  }
  cekquestion(){
      let alert = this.alertCtrl.create({
        title: 'New Question',
        subTitle: 'Menara tertinggi di bumi yang pernah dibangun di zaman Babylonia?',
        buttons: ['OK']
      }).present();

  }

}
