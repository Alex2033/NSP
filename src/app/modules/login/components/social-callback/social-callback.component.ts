import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {AuthService} from '../../../../shared/services/auth.service';
import {LoaderService} from '../../../../shared/services/loader.service';

@Component({
  selector: 'app-social-callback',
  templateUrl: './social-callback.component.html',
  styleUrls: ['./social-callback.component.scss']
})
export class SocialCallbackComponent implements OnInit {
  success = false;
  error;

  constructor(private route: ActivatedRoute, private auth: AuthService,  private loader: LoaderService) {
  }

  ngOnInit() {
    this.loader.hidePanels();
    this.auth.loginViaOAuth(this.route.snapshot.params.provider, this.route.snapshot.queryParams).pipe(finalize(() => {
      // this.loader.hide();
    })).subscribe((response) => {
      this.success = true;
      window.close();
    }, (response) => {
      this.error = response;
    });
  }

}
