import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ModalService} from '../../../services/modal.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {YoutubeVideoIdPipe} from '../../../pipes/youtube-video-id.pipe';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit {
  videoUrl: SafeResourceUrl;
  @Input() id;
  @Input() set url(value: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoIdPipe.transform(value));
  }

  constructor(private modalService: ModalService, public sanitizer: DomSanitizer, private videoIdPipe: YoutubeVideoIdPipe, private api: ApiService) {
  }

  ngOnInit() {
    this.api.addVideoView(this.id).subscribe();
  }

  close() {
    this.modalService.close();
  }

}
