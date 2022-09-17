import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlosrandomnumberscomponent',
  templateUrl: './carlosrandomnumberscomponent.component.html',
  styleUrls: ['./carlosrandomnumberscomponent.component.css'],
})
export class CarlosrandomnumberscomponentComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit() {}

  getRandom() {
    return Math.floor(Math.random() * 1000 + 1);
  }
}
