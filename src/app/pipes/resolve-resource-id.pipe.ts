import { Pipe, PipeTransform } from '@angular/core';
import {LinkArray} from "../trade-client";

@Pipe({
  name: 'resolveResourceId'
})
export class ResolveResourceIdPipe implements PipeTransform {

  transform(links: LinkArray, relation: string): string {
    let result: string = '';

    if (links) {
      for (let link of links) {
        if (link.rel === relation) {
          let urlParts = link.href.split('/');
          result = urlParts[urlParts.length - 1];
        }
      }
    }

    return result;
  }

}
