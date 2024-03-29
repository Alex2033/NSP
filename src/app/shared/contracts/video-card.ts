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
  imageTitle?: string | null;
  imageAlt?: string | null;
  smallImageXl: string | null;
  smallImageLg: string | null;
  smallImageMd: string | null;
  smallImageSm: string | null;
  smallImageTitle?: string | null;
  smallImageAlt?: string | null;
  videoUrl: string;
  videoId: number;
  backgroundOverlay: boolean;
}
