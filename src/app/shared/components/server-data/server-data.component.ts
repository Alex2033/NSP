import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-server-data',
  templateUrl: './server-data.component.html',
  styleUrls: ['./server-data.component.scss']
})
export class ServerDataComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
        switch (data.data.type) {
          case 'page':
            this.router.navigate(['/pages/detail'], {
              state: {
                data: data.data
              },
              skipLocationChange: true
            });
        }
      }
    );
  }

}
