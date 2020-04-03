import { YoutubeVideoIdPipe } from './youtube-video-id.pipe';

describe('YoutubeVideoIdPipe', () => {
  it('create an instance', () => {
    const pipe = new YoutubeVideoIdPipe();
    expect(pipe).toBeTruthy();
  });
});
