import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from '@firebase/app'
import '@firebase/auth'
import { NavController } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/menu';

// const PREFIX_TOKEN = 'v1systemrc2018.TOKEN';
// const PREFIX_EXP = 'v1systemrc2018.EXP';
@Injectable()
/**
 * This Service have the responsilibity t
 * 
 * @author Silva Neto
 * @version 0.1.0
 */
export class AuthService {
  constructor(private _firebaseAuth: AngularFireAuth) { }
  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then(res => {
    //   this.setToken(res.credential.accessToken);
        console.log('Sucesso!');
        // this.navCtrl.setRoot(MenuPage);
    });
  }
//   getToken() {
//     return localStorage.getItem(PREFIX_TOKEN);
//   }
//   setToken(token: string) {
//     localStorage.setItem(PREFIX_TOKEN, token);
//   }
//   logout() {
//     this._firebaseAuth.auth.signOut()
//       .then(() => { this.navCtrl.setRoot() this.setToken("LOGOUT") });
//   }
  isCurrentUser() {
    return this._firebaseAuth.auth.currentUser;
  }
}