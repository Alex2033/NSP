export interface ArticleCard {
  type: string;
  size: string;
  articlePublishedAt: number;
  markerName: string;
  title: string;
  previewText: string;
  view: string;
  articleViewsCount: number;
  articleId: number;
  articleSlug: string;
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
  backgroundOverlay: boolean;
}
