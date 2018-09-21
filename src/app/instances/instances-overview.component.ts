import {Component, OnInit} from '@angular/core';
import {
  DataElementInstanceArray,
  DataElementInstanceService,
  DataObjectInstanceArray,
  DataObjectInstanceService
} from "../trade-client";

@Component({
  selector: 'instances',
  templateUrl: './instances-overview.component.html',
})
export class InstancesOverviewComponent implements OnInit {

  dataObjectInstanceArray: DataObjectInstanceArray;

  dataElementInstanceArray: DataElementInstanceArray;

  startIndex: number = 1;
  size: number = 5;

  constructor(private dataObjectInstanceApi: DataObjectInstanceService, private dataElementInstanceApi: DataElementInstanceService) {
  }

  ngOnInit(): void {
    this.dataObjectInstanceApi.getAllDataObjectInstances(this.startIndex, this.size).subscribe(result => this
      .dataObjectInstanceArray = result.instances, error => console.error('An error occurred', error));

    this.dataElementInstanceApi.getAllDataElementInstances(this.startIndex, this.size).subscribe(result => this
      .dataElementInstanceArray = result.instances, error => console.error('An error occurred', error));
  }
}
