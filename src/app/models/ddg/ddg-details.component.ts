import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {DataDependencyGraph} from '../../trade-client/model/dataDependencyGraph';
import {DataDependencyGraphWithLinks} from '../../trade-client/model/dataDependencyGraphWithLinks';
import {DataDependencyGraphService} from '../../trade-client/api/dataDependencyGraph.service';

import {FileUploader} from 'ng2-file-upload/ng2-file-upload';

import {DataExchangeService} from '../../services/data-exchange.service';

@Component({
  selector: 'ddg-details',
  templateUrl: './ddg-details.component.html',
})
export class DdgDetailsComponent implements OnInit {

  ddg$: Observable<DataDependencyGraphWithLinks>;

  data: string;

  uploader: FileUploader;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ddgApi: DataDependencyGraphService,
    private dataExchangeService: DataExchangeService
  ) {
    this.uploader = new FileUploader({
      disableMultipart: true,
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.onerror = () => {
            reader.abort();
            reject(new DOMException("Problem parsing input file."));
          };
          let file = item._file;
          reader.onload = () => {
            file = reader.result.split(',')[1];
            resolve(file);
          };
          reader.readAsDataURL(file);
        });
      }
    });
  }

  ngOnInit(): void {
    this.ddg$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.ddgApi.getDataDependencyGraphDirectly(params.get('id'))));
  }

  fileSelected(ddgUrl: string) {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
      item.headers = [{name: 'Content-Type', value: 'application/octet-stream'}];
      item.url = ddgUrl + '/serialized-graph';
    }
  }

  uploadFile(ddg: DataDependencyGraph) {
    let file = this.uploader.queue[0]._file;

    let reader = new FileReader();
    reader.onerror = () => {
      reader.abort();
    };

    reader.onload = () => {
      file = reader.result.split(',')[1];
    };
    reader.readAsDataURL(file);

    this.dataExchangeService.uploadBinaryData(ddg.href + '/serialized-graph', file).subscribe(result => this.uploader.clearQueue(),
      error => console.error('An error occurred', error));
  }

  getDataOfDDG(ddg: DataDependencyGraph) {
    let ddgUrl: string = ddg.href;

    this.dataExchangeService.retrieveBinaryData(ddgUrl + '/serialized-graph').subscribe(results => this.data = results,
      error => console.error('An error occurred', error));
  }
}
