import {Component, OnInit} from '@angular/core';

import {
  DataDependencyGraphArray,
  DataDependencyGraphService,
  DataElementArray, DataElementService,
  DataObjectArray,
  DataObjectService
} from "../trade-client";

@Component({
  selector: 'models',
  templateUrl: './models-overview.component.html',
})
export class ModelsOverviewComponent implements OnInit {

  dataDependencyGraphArray: DataDependencyGraphArray;

  dataObjectArray: DataObjectArray;

  dataElementArray: DataElementArray;

  constructor(private ddgApi: DataDependencyGraphService, private dataObjectApi: DataObjectService, private dataElementApi: DataElementService) {
  }

  ngOnInit(): void {
    this.ddgApi.getDataDependencyGraphs(1, 10).subscribe(result => this
      .dataDependencyGraphArray = result.dataDependencyGraphs, error => console.error('An error occurred', error));

    this.dataObjectApi.getAllDataObjects(1, 10).subscribe(result => this
      .dataObjectArray = result.dataObjects, error => console.error('An error occurred', error));

    this.dataElementApi.getAllDataElements(1, 10).subscribe(result => this
      .dataElementArray = result.dataElements, error => console.error('An error occurred', error));
  }

}
