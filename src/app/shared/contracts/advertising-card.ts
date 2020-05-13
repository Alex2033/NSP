export interface AdvertisingCard {
  size: string;
  id: number;
  bannerType: 'image' | 'html';
  url: string;
  images?: {
    xl: string;
    lg: string;
    md: string;
    sm: string;
  };

  html?: {
    xl: string;
    lg: string;
    md: string;
    sm: string;
  };
}
