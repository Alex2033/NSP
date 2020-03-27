export interface Quote {
  text: string;
  publishedAt: number;
  source?: {
    name: string;
    url?: string;
  };
  author?: {
    photoXl: string;
    photoLg: string;
    photoMd: string;
    photoSm: string;
    firstName: string;
    lastName: string;
    position: string;
  };
}
