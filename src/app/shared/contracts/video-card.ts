export interface VideoCard {
  type: string;
  size: string;
  videoPublishedAt: number;
  markerName: string;
  title: string;
  videoViewsCount: number;
  imageXl: string | null;
  imageLg: string | null;
  imageMd: string | null;
  imageSm: string | null;
  smallImageXl: string | null;
  smallImageLg: string | null;
  smallImageMd: string | null;
  smallImageSm: string | null;
  videoUrl: string;
}
