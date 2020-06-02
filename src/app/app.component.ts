import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Orbit-Report';
  sourceList: Satellite[];
  displayList: Satellite[];
  constructor() {
    this.sourceList = [];
    this.displayList = [];
    let satellitesURL = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesURL).then(function (response) {
      response.json().then(function (data) {
        let fetchedSatellites = data.satellites;

        for (let satellite of fetchedSatellites) {
          this.sourceList.push(new Satellite(satellite.name, satellite.type, satellite.launchDate, satellite.orbitType, satellite.operational));
        }
        this.displayList = this.sourceList.slice();
      }.bind(this));
    }.bind(this));

  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    let foundInName: boolean;
    let foundInType: boolean;
    let findAll: boolean;
    searchTerm = searchTerm.toLowerCase();
    for (let element of this.sourceList) {
      foundInName = element.name.toLowerCase().includes(searchTerm);
      foundInType = element.type.toLowerCase().includes(searchTerm);
      findAll = searchTerm === 'find all' || searchTerm === '';

      if (foundInName || foundInType || findAll) {
        matchingSatellites.push(element);
      }

    }
    this.displayList = matchingSatellites;
  }

}

