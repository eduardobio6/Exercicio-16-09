import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlossimpleinterestscomponent',
  templateUrl: './carlossimpleinterestscomponent.component.html',
  styleUrls: ['./carlossimpleinterestscomponent.component.css'],
})
export class CarlossimpleinterestscomponentComponent implements OnInit {
  @Input() capital: string;
  @Input() taxa: string;
  @Input() tempo: string;

  constructor() {}

  ngOnInit() {}

  getJurosSimples() {
    return Number(this.capital) * Number(this.taxa) * Number(this.tempo);
  }
}
