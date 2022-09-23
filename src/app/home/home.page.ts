import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  logEvent(_event) {
    console.log(_event)
    alert("Button clicked "+ _event.value)
  }

  
}
