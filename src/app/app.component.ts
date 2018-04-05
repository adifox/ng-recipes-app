import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCEQF1rPJybaqtR1eYsTeLEWYPeINh0MBg',
      authDomain: 'ng-recipes-e52bc.firebaseapp.com',
    });
  }
}
