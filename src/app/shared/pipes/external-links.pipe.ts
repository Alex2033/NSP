import { Pipe, PipeTransform } from '@angular/core';
import {environment} from '../../../environments/environment';

@Pipe({
  name: 'externalLinks',
  pure: true
})
export class ExternalLinksPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let el: any = document.createElement('div');
    el.innerHTML = value;
    el = this.transformNode(el);
    return el.innerHTML;
  }
  private transformNode(el) {
    for (let i = 0, l = el.childNodes.length; i < l; i++) {
      if (el.childNodes[i].hasChildNodes() && el.childNodes.length > 1) {
        if (el.childNodes[i].nodeName === 'A') {
          el.childNodes[i].target = '_blank';
          if (!el.childNodes[i].href.includes(environment.siteHost)) {
            // Внешняя ссылка
            el.childNodes[i].rel = 'nofollow noopener';
          }
        }
        el.childNodes[i].innerHTML = this.transformNode(el.childNodes[i]).innerHTML;
      }
    }
    return el;
  }
}
