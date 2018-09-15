import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {DataValueWithLinks} from '../trade-client/model/dataValueWithLinks';
import {DataValue} from '../trade-client/model/dataValue';
import {DataValueService} from '../trade-client/api/dataValue.service';

import {FileUploader} from 'ng2-file-upload/ng2-file-upload';

import {DataExchangeService} from '../services/data-exchange.service';

@Component({
  selector: 'data-value-details',
  templateUrl: './data-value-details.component.html',
})
export class DataValueDetailsComponent implements OnInit {

  dataValue$: Observable<DataValueWithLinks>;

  data: string;

  uploadData: string;

  pdfSrc: Uint8Array;

  uploader: FileUploader;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataValueApi: DataValueService,
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
    this.dataValue$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataValueApi.getDataValueDirectly(params.get('id'))));
  }

  getDataOfDataValue(dataValue: DataValue) {
    let dataValueUrl: string = dataValue.href;
    let classOfData: string = this.getClassOfData(dataValue);

    if (classOfData === 'pdf') {
      this.dataExchangeService.retrieveDataAsArray(dataValueUrl + '/data').subscribe(results => this.pdfSrc =
        new Uint8Array(results), error => console.error('An error occurred', error));
    } else if (classOfData === 'text' || classOfData === 'xml' || classOfData === 'simple') {
      this.dataExchangeService.retrieveBinaryData(dataValueUrl + '/data').subscribe(results => this.data = results,
        error => console.error('An error occurred', error));
    } else if (classOfData !== 'other') {
      this.dataExchangeService.retrieveDataAsArray(dataValueUrl + '/data').subscribe(results => {
          let blob = new Blob([results],{type:'application/octet-stream'});
          let reader = new FileReader();

          reader.onerror = () => {
            reader.abort();
          };

          reader.onload = () => {
            this.data = reader.result.split(',')[1];
          };

          reader.readAsDataURL(blob);
        },
        error => console.error('An error occurred', error));
    }
  }

  getClassOfData(dataValue: DataValue) {
    let result: string = 'other';

    if (dataValue.contentType) {
      if (dataValue.contentType.startsWith('video/')) {
        result = 'video';
      } else if (dataValue.contentType.startsWith('image/')) {
        result = 'image';
      } else if (dataValue.contentType === 'text/plain') {
        result = 'text';
      } else if (dataValue.contentType === 'application/pdf') {
        result = 'pdf';
      } else if (dataValue.contentType === 'application/xml') {
        result = 'xml';
      }
    } else if (dataValue.type !== 'binary') {
      result = 'simple';
    }

    return result;
  }

  fileSelected(dataValueUrl: string) {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
      item.headers = [{name: 'Content-Type', value: 'application/octet-stream'}];
      item.url = dataValueUrl + '/data';
    }
  }

  uploadSimpleData(dataValue: DataValue) {
    this.dataExchangeService.uploadBinaryData(dataValue.href + '/data', this.uploadData).subscribe(result => this.uploadData = null,
      error => console.error('An error occurred', error));
  }

  uploadFile(dataValue: DataValue) {
    let file = this.uploader.queue[0]._file;

    let reader = new FileReader();
    reader.onerror = () => {
      reader.abort();
    };

    reader.onload = () => {
      file = reader.result.split(',')[1];
    };
    reader.readAsDataURL(file);

    this.dataExchangeService.uploadBinaryData(dataValue.href + '/data', file).subscribe(result => this.uploader.clearQueue(),
      error => console.error('An error occurred', error));
  }
}
