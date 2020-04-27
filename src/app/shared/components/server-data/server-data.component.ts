import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {CurrentPageService} from '../../services/current-page.service';

@Component({
  selector: 'app-server-data',
  templateUrl: './server-data.component.html',
  styleUrls: ['./server-data.component.scss']
})
export class ServerDataComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private currentPage: CurrentPageService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
        setTimeout(() => {
          this.currentPage.next(data.config);
        });
        switch (data.config.type) {
          case 'page':
            this.router.navigate(['/pages/detail'], {
              state: {
                config: data.config
              },
              skipLocationChange: true
            });
            break;
          case 'project':
            this.router.navigate(['/projects/detail'], {
              state: {
                config: data.config
              },
              skipLocationChange: true
            });
            break;
          case 'tag':
          case 'collection':
          case 'section':
            this.router.navigate(['/sections/detail'], {
              state: {
                config: data.config
              },
              skipLocationChange: true
            });
            break;
          case 'article':
            this.router.navigate(['/server_article'], {
              state: {
                config: data.config
              },
              skipLocationChange: true
            });
            break;
        }
      }
    );
  }

}
