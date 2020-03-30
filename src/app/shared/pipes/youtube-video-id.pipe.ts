import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'youtubeVideoId',
  pure: true
})

@Injectable({
  providedIn: 'root'
})
export class YoutubeVideoIdPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let videoId = value.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId;
  }

}
