import {Inject, Pipe, PipeTransform, PLATFORM_ID} from '@angular/core';
import {environment} from '../../../environments/environment';
import {isPlatformBrowser} from '@angular/common';

@Pipe({
  name: 'externalLinks',
  pure: true
})
export class ExternalLinksPipe implements PipeTransform {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
  }

  transform(value: string, ...args: unknown[]): unknown {
    if (!isPlatformBrowser(this.platformId)) {
      return value;
    }
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
