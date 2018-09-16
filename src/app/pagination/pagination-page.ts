import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {LinkArray} from '../trade-client/model/linkArray';

export class Page<T> {
  start: number;     // start index
  size: number;      // number of items to display
  next: string;      // url of the next page
  previous: string;  // url of the previous page
  results: T;        // items of the current page
}

export function queryPaginated<S, T>(http: HttpClient, pageUrl: string, property: string): Observable<Page<T>> {
  return http.get<S>(pageUrl).pipe(map(result => {
    let page = new Page<T>();

    let links: LinkArray;
    links = result['links'];
    if (links) {
      for (let link of links) {
        if (link.rel === 'https://www.iana.org/assignments/link-relations/link-relations.xhtml#next') {
          page.next = link.href;
        } else if (link.rel === 'https://www.iana.org/assignments/link-relations/link-relations.xhtml#prev') {
          page.previous = link.href;
        }
      }
    }

    let params = decodeURLParams(pageUrl);

    page.start = params['start'] ? +params['start'] : 1;
    page.size = params['size'] ? +params['size'] : 10;
    page.results = result[property];

    return page;
  }));
}


const decodeURLParams = search => {
  const hashes = search.slice(search.indexOf("?") + 1).split("&");
  return hashes.reduce((params, hash) => {
    const split = hash.indexOf("=");
    const key = hash.slice(0, split);
    const val = hash.slice(split + 1);
    return Object.assign(params, { [key]: decodeURIComponent(val) });
  }, {});
};
