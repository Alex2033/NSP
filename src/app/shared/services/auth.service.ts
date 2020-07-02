import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {CurrentUser} from '../contracts/current-user';
import {ApiService} from './api.service';
import {ApiClientService} from './api-client.service';
import {ModalService} from './modal.service';
import {deserialize} from '../functions/deseriale';
import {CookieService} from 'ngx-cookie-service';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserId: number;
  user: CurrentUser;
  infoLoading = false;
  infoLoaded: Subject<void> = new Subject();
  afterLogin: Subject<void> = new Subject(); // Т.к. пользователь может быть авторизован до запуска обработчиков
  afterLogout: Subject<void> = new Subject();

  userHasInfo() {
    return this.user && !!this.user.provider;
  }

  check() {
    return !!this.currentUserId;
  }

  signIn() {
    if (this.check()) {
      return of(true);
    } else {
      return this.modal.open('login');
    }
  }

  loginViaOAuth(provider, params: any) {
    return this.api.loginViaOAuth(provider, params).pipe(map((response) => {
      this.checkCookies();
      return response;
    }));
  }

  constructor(
    private api: ApiService,
    private modal: ModalService,
    private apiClient: ApiClientService,
    @Inject(PLATFORM_ID) private platformId: any,
    private cookies: CookieService) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCookies();
      setInterval(() => { // Интервал на случай если изменение произойдет в другой вкладке
        this.checkCookies();
      }, 1000);
    }
    this.afterLogout.subscribe(() => {
      delete this.user;
      this.currentUserId = null;
    });
  }

  logout() {
    this.api.logout().subscribe(() => {
      this.checkCookies();
    });
  }

  loadInfo(): Observable<void> {
    this.infoLoading = true;
    return this.api.getCurrentUserInfo().pipe(map((data) => {
      this.user = deserialize(data) as any;
      this.infoLoading = false;
      this.infoLoaded.next();
    }));
  }

  checkCookies() {
    let userId: any = this.cookies.get('user_id');
    if (userId === '') {
      userId = null;
    } else {
      userId = parseInt(userId, 10);
    }
    if (userId !== this.currentUserId) {
      if (!userId) {
        // Значит закончилась кука и переменная this.currentUserId еще не сброшена в null либо метод вызван вручную после выхода
        this.afterLogout.next();
      } else {
        // Пользователь был авторизован в другой вкладке либо сработал вызов метода после входа
        this.currentUserId = userId;
        this.user = {
          id: userId
        };
        this.afterLogin.next();
      }
    }
  }
}
