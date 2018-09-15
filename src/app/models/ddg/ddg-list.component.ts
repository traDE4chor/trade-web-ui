import {Component, OnInit} from '@angular/core';

import {DataDependencyGraphArray} from '../../trade-client/model/dataDependencyGraphArray';
import {DataDependencyGraphWithLinks} from '../../trade-client/model/dataDependencyGraphWithLinks';
import {DataDependencyGraphService} from '../../trade-client/api/dataDependencyGraph.service';
import {LinkArray} from '../../trade-client/model/linkArray';

@Component({
  selector: 'ddg-list',
  templateUrl: './ddg-list.component.html'
})
export class DdgListComponent implements OnInit {

  dataDependencyGraphArray: DataDependencyGraphArray;
  links: LinkArray;

  pagination_start: number = 1;
  pagination_size: number = 10;

  constructor(private ddgApi: DataDependencyGraphService) {
  }

  ngOnInit(): void {
    this.ddgApi.getDataDependencyGraphs(this.pagination_start, this.pagination_size).subscribe(result => {
      this
        .dataDependencyGraphArray = result.dataDependencyGraphs;
      this.links = result.links;
    }, error => console.error('An error occurred', error));
  }

  trackByDDG(index: number, ddg: DataDependencyGraphWithLinks): string {
    return ddg.dataDependencyGraph.id;
  }
}
