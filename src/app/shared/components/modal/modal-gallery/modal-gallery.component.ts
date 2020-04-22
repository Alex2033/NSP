import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {ModalService} from '../../../services/modal.service';

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.scss']
})
export class ModalGalleryComponent {
  carouselConfig: SwiperConfigInterface = {
    slidesPerView: 1,
    loop: false,
    autoHeight: true
  };

  @Input() images = [
    {
      imageXl: 'https://i.pinimg.com/originals/1f/87/90/1f8790df8b450fbf5c3b4a6b9db4f822.jpg',
      imageLg: 'https://i.pinimg.com/originals/1f/87/90/1f8790df8b450fbf5c3b4a6b9db4f822.jpg',
      imageMd: 'https://i.pinimg.com/originals/1f/87/90/1f8790df8b450fbf5c3b4a6b9db4f822.jpg',
      imageSm: 'https://i.pinimg.com/originals/1f/87/90/1f8790df8b450fbf5c3b4a6b9db4f822.jpg',
      alt: null,
      title: null
    },
    {
      imageXl: 'https://i.pinimg.com/originals/1f/87/90/1f8790df8b450fbf5c3b4a6b9db4f822.jpg',
      imageLg: 'https://i.pinimg.com/originals/1f/87/90/1f8790df8b450fbf5c3b4a6b9db4f822.jpg',
      imageMd: 'https://i.pinimg.com/originals/1f/87/90/1f8790df8b450fbf5c3b4a6b9db4f822.jpg',
      imageSm: 'https://i.pinimg.com/originals/1f/87/90/1f8790df8b450fbf5c3b4a6b9db4f822.jpg',
      alt: null,
      title: null
    }
  ];

  @Input() index = 0;

  constructor(private modalService: ModalService) {
  }
  close() {
    this.modalService.close();
  }
}
