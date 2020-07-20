import {Inject, Injectable, Optional, PLATFORM_ID} from '@angular/core';
import {RESPONSE} from '@nguniversal/express-engine/tokens';
import {Router} from '@angular/router';
import {isPlatformServer} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Optional() @Inject(RESPONSE) private response: any,
    private router: Router
  ) {
  }

  ok() {
    this.status(200);
  }

  notFound() {
    this.status(404);
    this.router.navigateByUrl('/not-found', {skipLocationChange: true});
  }

  permanentRedirect(location: string) {
    this.status(302); // FIXME На время проблем с редиректами ставлю 302 редирект
    this.setHeader('Location', location);
    this.router.navigateByUrl(location);
  }

  forbidden() {
    this.status(403);
    // this.router.navigate(['/login'], {queryParams: {back: typeof window !== 'undefined' ? window.location.pathname + window.location.search : null}})
  }

  status(code: number) {
    if (isPlatformServer(this.platformId)) {
      this.response.status(code);
    }
  }

  setHeader(name, value) {
    if (isPlatformServer(this.platformId)) {
      this.response.setHeader(name, value);
    }
  }
}
