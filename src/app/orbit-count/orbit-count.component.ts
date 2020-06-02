import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-count',
  templateUrl: './orbit-count.component.html',
  styleUrls: ['./orbit-count.component.css']
})
export class OrbitCountComponent implements OnInit {
  @Input() satellites: Satellite[];

  types: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  getCount(type: string): number {
    return this.satellites.filter(satellite => satellite.type.toLowerCase() === type.toLowerCase()).length;
  }


  getTypes(): number {
    for (let satellite of this.satellites) {
      if (!this.types.includes(satellite.type)) {
        this.types.push(satellite.type);
      }
    }
    return this.types.length;
  }

}
