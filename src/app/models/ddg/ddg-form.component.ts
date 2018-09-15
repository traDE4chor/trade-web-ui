import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataDependencyGraphWithLinks } from '../../trade-client/model/dataDependencyGraphWithLinks';
import { DataDependencyGraphData } from '../../trade-client/model/dataDependencyGraphData';
import { DataDependencyGraphService } from '../../trade-client/api/dataDependencyGraph.service';

@Component({
  selector: 'ddg-form',
  templateUrl: './ddg-form.component.html',
})
export class DdgFormComponent implements OnInit {

  ddg: DataDependencyGraphData;

  resultDDG: DataDependencyGraphWithLinks;

  constructor(
    private router: Router,
    private ddgApi: DataDependencyGraphService
  ) {}

  ngOnInit(): void {
    this.newDDG();
  }

  newDDG() {
    this.ddg = {
      name: '',
      entity: ''
    }
  }

  submitDDG() {
    this.ddgApi.addDataDependencyGraph(this.ddg).subscribe(result => this.resultDDG = result,
    error => console.error('An error occurred', error));

    this.router.navigate(['/models/ddgs']);
  }
}
