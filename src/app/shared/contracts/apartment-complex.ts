export interface ApartmentComplex {
  id: number;
  name: string;
  previewText?: string;
  site?: string;
  areaName: string;
  imageXl: string;
  imageLg: string;
  imageMd: string;
  imageSm: string;
  imageTitle?: string | null;
  imageAlt?: string | null;
  detailImageXl?: string;
  detailImageLg?: string;
  detailImageMd?: string;
  detailImageSm?: string;
  detailImageTitle?: string | null;
  detailImageAlt?: string | null;
  logoXl?: string;
  logoLg?: string;
  logoMd?: string;
  logoSm?: string;
  logoTitle?: string | null;
  logoAlt?: string | null;
  content?: any;

  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
}
