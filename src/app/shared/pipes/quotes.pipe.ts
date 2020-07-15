import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'quotes',
  pure: true
})
export class QuotesPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) {
      return '';
    }
    let el: any = document.createElement('div');
    el.innerHTML = value;
    el = this.transformNode(el);
    return el.innerHTML;
  }
  private transformNode(el) {
    for (let i = 0, l = el.childNodes.length; i < l; i++) {
      if (el.childNodes[i].hasChildNodes()) {
        el.childNodes[i].innerHTML = this.transformNode(el.childNodes[i]).innerHTML;
      } else {
        // console.log(el.childNodes[i].textContent);
        el.childNodes[i].textContent = el.childNodes[i].textContent.replace(/\x27/g, '\x22').replace(/(\w)\x22(\w)/g, '$1\x27$2').replace(/(^)\x22(\s)/g, '$1»$2').replace(/(^|\s|\()"/g, '$1«').replace(/"(\;|\!|\?|\:|\.|\,|$|\)|\s)/g, '»$1');
      }
    }
    return el;
  }
}
