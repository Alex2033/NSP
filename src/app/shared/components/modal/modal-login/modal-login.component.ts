import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from '../../../services/modal.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import {environment} from '../../../../../environments/environment';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit, OnDestroy {
  @Input() url: string;
  popups = [];
  loginSubscription: Subscription;
  screen: string;
  constructor(private modalService: ModalService, private responsive: ResponsiveService, private auth: AuthService, private modal: ModalService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
    this.loginSubscription = this.auth.afterLogin.subscribe(() => {
      // this.popups.forEach((popup) => {
      //   //popup.close();
      // });
      this.modal.close(true);
    });
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  close() {
    this.modalService.close();
  }

  signInViaVkontakte() {
    this.popups.push(this.popupCenter(
      environment.apiHost + '/login/vkontakte',
      'Вход с помощью аккаунта',
      800,
      600
    ));
  }

  signInViaFacebook() {
    this.popups.push(this.popupCenter(
      environment.apiHost + '/login/facebook',
      'Вход с помощью аккаунта',
      800,
      600
    ));
  }

  signInViaGoogle() {
    this.popups.push(this.popupCenter(
      environment.apiHost + '/login/google',
      'Вход с помощью аккаунта',
      800,
      600
    ));
  }

  private popupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(url, title, 'scrollbars=yes, width=' + w / systemZoom + ', height=' + h / systemZoom + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus();
    }
    return newWindow;
  }

}
