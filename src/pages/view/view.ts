import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RssProvider } from '../../providers/rss/rss';
import viewed from '../viewed';
import { HomePage } from '../home/home';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

  article = viewed;

  pop() {
    const prompt = this.alertCtrl.create({
      title: 'Location',
      message: "Choose location",
      inputs: [
        {
          name: 'international',
          type: 'button',
          value:'International'
        },
        {
          name: 'national',
          type: 'button',
          value:'National'
        },
        {
          name: 'local',
          type: 'button',
          value:'Local'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        
      ]
    });
    prompt.present();
  }
  home(){
    this.navCtrl.push(HomePage);
  }
}
