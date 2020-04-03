export interface FrontArticleCard {
  type: string;
  articlePublishedAt: number;
  markerName: string;
  title: string;
  previewText: string;
  view: string;
  articleViewsCount: number;
  articleId: number;
  articleSlug: string;
  directorySlug: string;
  directoryName: string;
  imageXl: string | null;
  imageLg: string | null;
  imageMd: string | null;
  imageSm: string | null;
  smallImageSm: string | null;
}
