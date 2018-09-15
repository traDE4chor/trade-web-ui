import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataExchangeService {

  private httpOptions;

  constructor(
    private http: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/octet-stream'
      })
    };
  }

  public retrieveBinaryData(url: string) {
    return this.http.get(url, {responseType: 'text'});
  }

  public retrieveDataAsArray(url: string) {
    return this.http.get(url, {responseType: 'arraybuffer'});
  }

  public uploadBinaryData(url: string, data: any) {
    return this.http.post(url, data, this.httpOptions);
  }
}

