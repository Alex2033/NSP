export interface ArticleBanner {
  id: number;
  type: 'image' | 'html';
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
