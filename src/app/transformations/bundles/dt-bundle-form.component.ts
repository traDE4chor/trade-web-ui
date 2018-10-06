import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppArchive, Application, ApplicationsService} from "../../hdtapps-client";

@Component({
  selector: 'transformation-bundle-form',
  templateUrl: './dt-bundle-form.component.html',
})
export class DtBundleFormComponent implements OnInit {

  appArchive: AppArchive;

  resultApp: Application;

  constructor(
    private router: Router,
    private appApi: ApplicationsService
  ) {
  }

  ngOnInit(): void {
    this.newApp();
  }

  newApp() {
    this.appArchive = {
      name: '',
      deploy: true,
      test: false,
      archiveURL: ''
    }
  }

  submitApp() {
    this.appApi.hdtappsApiPublishApp(this.appArchive).subscribe(result => this.resultApp = result,
      error => console.error('An error occurred', error));

    this.router.navigate(['/transformations/bundles']);
  }
}
