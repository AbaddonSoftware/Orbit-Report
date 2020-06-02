import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {
  @Input() satellites: Satellite[];
  timesClicked: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  sort(column: string): void {
    switch (this.timesClicked) {
      case 0:
        this.satellites.sort((a: Satellite, b: Satellite) =>
          (Number(a[column] > b[column]) - Number(a[column] < b[column])));
        this.timesClicked = 1;
        break;
      case 1:
        this.satellites.sort((a: Satellite, b: Satellite) =>
          (Number(a[column] < b[column]) - Number(a[column] > b[column])));
        this.timesClicked = 0;
        break;
    }

  }

}
