import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Application, ApplicationsService} from "../../hdtapps-client";

@Component({
  selector: 'transformation-bundle-details',
  templateUrl: './dt-bundle-details.component.html',
})
export class DtBundleDetailsComponent implements OnInit {

  app$: Observable<Application>;

  data: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appApi: ApplicationsService
  ) {
  }

  ngOnInit(): void {
    this.app$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.appApi.hdtappsApiGetAppById(params.get('id'))));
  }

}
