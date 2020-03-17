export interface ApartmentComplex {
  id: number;
  name: string;
  previewText?: string;
  site?: string;
  descriptionText?: string;
  locationText?: string;
  latitude?: number;
  longitude?: number;
  areaName: string;
  imageCollectionXl?: string[];
  imageCollectionLg?: string[];
  imageCollectionMd?: string[];
  imageCollectionSm?: string[];
  imageXl: string;
  imageLg: string;
  imageMd: string;
  imageSm: string;
  detailImageXl?: string;
  detailImageLg?: string;
  detailImageMd?: string;
  detailImageSm?: string;
  logoXl?: string;
  logoLg?: string;
  logoMd?: string;
  logoSm?: string;
}
