import {Directive, ElementRef, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Directive({
  selector: '[appDynamicRoutes]'
})
export class DynamicRoutesDirective {

  constructor(private el: ElementRef, private router: Router) {
  }

  @HostListener('click', ['$event'])
  public onClick(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href').includes(environment.siteHost)) {
      this.router.navigateByUrl(event.target.getAttribute('href').substr(environment.siteHost.length));
      event.preventDefault();
    } else {
      return;
    }
  }

}
