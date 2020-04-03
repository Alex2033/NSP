import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  shareToVkontakte() {
    this.popupCenter(
      'https://vk.com/share.php?url=' + encodeURIComponent(window.location.href),
      'Поделиться',
      800,
      600
    );
  }

  shareToFacebook() {
    this.popupCenter(
      'https://facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href),
      'Поделиться',
      800,
      600
    );
  }

  shareToTwitter() {
    this.popupCenter(
      'https://twitter.com/intent/tweet/?text=' + encodeURIComponent(window.location.href),
      'Поделиться',
      800,
      600
    );
  }

  private popupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    let dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    let dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    let systemZoom = width / window.screen.availWidth;
    let left = (width - w) / 2 / systemZoom + dualScreenLeft;
    let top = (height - h) / 2 / systemZoom + dualScreenTop;
    let newWindow = window.open(url, title, 'scrollbars=yes, width=' + w / systemZoom + ', height=' + h / systemZoom + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) newWindow.focus();
    return newWindow;
  }

  copyLink() {
    const dummy = document.createElement('input');
    const text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }
}
