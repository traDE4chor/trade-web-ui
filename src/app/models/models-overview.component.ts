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

  startIndex: number = 1;
  size: number = 5;

  constructor(private ddgApi: DataDependencyGraphService, private dataObjectApi: DataObjectService, private dataElementApi: DataElementService) {
  }

  ngOnInit(): void {
    this.ddgApi.getDataDependencyGraphs(this.startIndex, this.size).subscribe(result => this
      .dataDependencyGraphArray = result.dataDependencyGraphs, error => console.error('An error occurred', error));

    this.dataObjectApi.getAllDataObjects(this.startIndex, this.size).subscribe(result => this
      .dataObjectArray = result.dataObjects, error => console.error('An error occurred', error));

    this.dataElementApi.getAllDataElements(this.startIndex, this.size).subscribe(result => this
      .dataElementArray = result.dataElements, error => console.error('An error occurred', error));
  }

}
