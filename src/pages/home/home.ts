import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RssProvider } from '../../providers/rss/rss';
import { ViewPage } from '../view/view';
import viewed from '../viewed';
import {WelcomePage} from '../../pages/welcome/welcome';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: string;
  data: string;

  title ;
  image ;
  description ;

  arr=[] ;

  constructor(public navCtrl: NavController, public rssprovider: RssProvider, public alertCtrl: AlertController) {
    
    this.rssprovider.getNews().then((data:any)=>{
    console.log(data);
    //this.title=data.articles[0].title ;
    for(var i = 0 ;i < 10 ; i++){
      this.arr.push(data.articles[i]);
    }
    })

    this.rssprovider.getInt().then((data:any)=>{
      console.log(data);
      //this.title=data.articles[0].title ;
      for(var i = 0 ;i < 10 ; i++){
        this.arr.push(data.articles[i]);
      }
      })
 
  
  }

  view(i){

    this.rssprovider.getNews().then((data:any)=>{
      viewed[0] = (data.articles[i]);
      this.navCtrl.push(ViewPage);
      })
  
  }
  

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
}
