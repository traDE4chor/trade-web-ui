import {Component, OnInit} from '@angular/core';
import {Application, ApplicationsService, Task, TasksService} from "../hdtapps-client";


@Component({
  selector: 'transformations',
  templateUrl: './transformations-overview.component.html',
})
export class TransformationsOverviewComponent implements OnInit {

  applicationsArray: Application[];

  tasksArray: Task[];

  constructor(private appsService: ApplicationsService, private taskService: TasksService) {
  }

  ngOnInit(): void {
    this.appsService.hdtappsApiFindApps().subscribe(result => this
      .applicationsArray = result, error => console.error('An error occurred', error));

    /*this.taskService.hdtappsApiListTasks().subscribe(result => this
      .applicationsArray = result, error => console.error('An error occurred', error));*/
  }

}
