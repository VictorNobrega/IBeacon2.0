import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { EventsPage } from '../events/events';
import { HistoryPage } from '../history/history';
import { HomePage } from '../home/home';
import { HoursPage } from '../hours/hours';
import { MainPage } from '../main/main';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  goToHome() {
    this.navCtrl.push(HomePage);
  }

  goToMain() {
    this.navCtrl.push(MainPage);
  }

  goToHistory() {
    this.navCtrl.push(HistoryPage);
  }

  goToHours() {
    this.navCtrl.push(HoursPage);
  }

  goToEvents() {
    this.navCtrl.push(EventsPage);
  }

  goToAbout() {
    this.navCtrl.push(AboutPage);
  }
}
