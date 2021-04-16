import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {ResponsiveService} from '../../services/responsive.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveImageComponent implements OnInit {
  @Input() xl: string;
  @Input() lg: string;
  @Input() md: string;
  @Input() xs: string;
  @Input() sm: string;
  @Input() scrollObservable: Observable<any> = null;
  @Input() itemprop: string; //Schema property
  @Input() alt: string = '';
  @Input() title: string = '';
  screens = ['xl', 'lg', 'md', 'sm', 'xs'];
  currentScreen = 'xl';
  loading = true;
  constructor(private cdr: ChangeDetectorRef, public responsive: ResponsiveService) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((value) => {
      this.cdr.detectChanges();
      this.currentScreen = value;
    });
  }

  url() {
    return this[this.currentScreen];
  }

  loadingComplete() {
    this.loading = false;
  }
}
