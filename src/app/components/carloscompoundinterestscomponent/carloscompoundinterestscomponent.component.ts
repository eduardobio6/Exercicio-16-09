import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carloscompoundinterestscomponent',
  templateUrl: './carloscompoundinterestscomponent.component.html',
  styleUrls: ['./carloscompoundinterestscomponent.component.css'],
})
export class CarloscompoundinterestscomponentComponent implements OnInit {
  @Input() p: string;
  @Input() i: string;
  @Input() t: string;
  constructor() {}

  ngOnInit() {}

  getJurosComposto() {
    return Number(this.p) * (1 + Number(this.i)) ** Number(this.t);
  }
}
