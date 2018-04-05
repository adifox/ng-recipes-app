import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  singupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/recipes']),
          firebase.auth().currentUser.getIdToken()
            .then(
              token => this.token = token,
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token) => {
        this.token = token;
        console.log('the token in the getToken promise:', this.token);
      });
    console.log('The token that is returned in getToken outside Promise:', this.token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/recipes']);
  }

}
