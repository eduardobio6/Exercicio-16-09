import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlostimercomponent',
  templateUrl: './carlostimercomponent.component.html',
  styleUrls: ['./carlostimercomponent.component.css'],
})
export class CarlostimercomponentComponent implements OnInit {
  counter = 0;

  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);

  constructor() {}

  ngOnInit() {}

  getTimer() {
    return this.counter;
  }
}
